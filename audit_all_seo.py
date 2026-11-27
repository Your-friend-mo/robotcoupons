import os
import re
import json
import xml.etree.ElementTree as ET

BASE_DIR = r"c:\Users\m\Documents\robotcoupons"
COUPON_DIR = os.path.join(BASE_DIR, "coupon")

with open(os.path.join(BASE_DIR, "coupons_list.json"), "r", encoding="utf-8") as f:
    coupons = json.load(f)

pages_to_check = [
    os.path.join(BASE_DIR, "index.html"),
    os.path.join(BASE_DIR, "robotcoupons.html"),
    os.path.join(BASE_DIR, "robotcoupons-com.html"),
    os.path.join(BASE_DIR, "www-robotcoupons.html"),
    os.path.join(BASE_DIR, "www-robotcoupons-com.html"),
    os.path.join(BASE_DIR, "games.html"),
    os.path.join(BASE_DIR, "gift-cards.html"),
    os.path.join(BASE_DIR, "trending.html"),
    os.path.join(BASE_DIR, "how-to-redeem.html"),
    os.path.join(BASE_DIR, "verification.html"),
    os.path.join(BASE_DIR, "about.html"),
    os.path.join(BASE_DIR, "contact.html"),
    os.path.join(BASE_DIR, "privacy.html"),
    os.path.join(BASE_DIR, "terms.html"),
]
for c in coupons:
    pages_to_check.append(os.path.join(COUPON_DIR, f"{c['slug']}.html"))

print(f"Total pages to audit: {len(pages_to_check)}")

errors = []

for p in pages_to_check:
    rel_p = os.path.relpath(p, BASE_DIR)
    if not os.path.exists(p):
        errors.append(f"Missing file: {rel_p}")
        continue
    with open(p, "r", encoding="utf-8") as f:
        c = f.read()
        
    # 1. H1 Check
    h1s = re.findall(r'<h1[^>]*>(.*?)</h1>', c, re.IGNORECASE | re.DOTALL)
    if len(h1s) != 1:
        errors.append(f"[{rel_p}] H1 count error: found {len(h1s)} (expected 1)")
        
    # 2. H3 Check (must have multiple H3s, especially on main and product pages)
    if "privacy" not in rel_p and "terms" not in rel_p:
        h3s = re.findall(r'<h3[^>]*>(.*?)</h3>', c, re.IGNORECASE | re.DOTALL)
        if len(h3s) < 3:
            errors.append(f"[{rel_p}] H3 count low: found {len(h3s)} (expected >= 3)")
            
    # 3. Heading jump check (H1 -> H4 without H2/H3, or H2 -> H4 without H3)
    # Check that any H4 is preceded by H3, H3 preceded by H2, etc.
    headings = re.findall(r'<h([1-6])[^>]*>', c, re.IGNORECASE)
    prev_level = 0
    for h in headings:
        lvl = int(h)
        if lvl > prev_level + 1 and prev_level != 0:
            errors.append(f"[{rel_p}] Heading level jump from H{prev_level} to H{lvl}")
            break
        prev_level = max(prev_level, lvl)
        
    # 4. Image Alt Check: Every <img> must have an alt attribute
    imgs = re.findall(r'<img\s+[^>]*>', c, re.IGNORECASE)
    for img in imgs:
        if 'alt=' not in img.lower() or 'alt=""' in img.lower() or "alt=''" in img.lower():
            errors.append(f"[{rel_p}] <img> missing alt attribute: {img[:60]}")
            
    # 5. Meta Description Length Check (140 - 160 characters on SEO pages)
    if "privacy" not in rel_p and "terms" not in rel_p:
        m_desc = re.search(r'<meta\s+name=["\']description["\']\s+content="([^"]*)"', c, re.IGNORECASE)
        if not m_desc:
            m_desc = re.search(r'<meta\s+name=["\']description["\']\s+content=\'([^\']*)\'', c, re.IGNORECASE)
        if not m_desc:
            m_desc = re.search(r'<meta\s+content="([^"]*)"\s+name=["\']description["\']', c, re.IGNORECASE)
        if not m_desc:
            m_desc = re.search(r'<meta\s+content=\'([^\']*)\'\s+name=["\']description["\']', c, re.IGNORECASE)
        if not m_desc:
            errors.append(f"[{rel_p}] Missing meta description")
        else:
            desc_len = len(m_desc.group(1))
            if not (140 <= desc_len <= 160):
                errors.append(f"[{rel_p}] Meta description length {desc_len} not in [140, 160]: '{m_desc.group(1)}'")
                
    # 6. Canonical URL Check
    m_canon = re.search(r'<link\s+rel=["\']canonical["\']\s+href=["\']([^"\']*)["\']', c, re.IGNORECASE)
    if not m_canon:
        m_canon = re.search(r'<link\s+href=["\']([^"\']*)["\']\s+rel=["\']canonical["\']', c, re.IGNORECASE)
    if not m_canon:
        errors.append(f"[{rel_p}] Missing canonical URL")
    else:
        canon_val = m_canon.group(1)
        if not canon_val.startswith("https://robotcoupons.com"):
            errors.append(f"[{rel_p}] Invalid canonical URL: {canon_val}")
            
    # 7. Social Media Meta Tags
    if "privacy" not in rel_p and "terms" not in rel_p:
        for tag in ["og:title", "og:description", "og:url", "og:site_name", "twitter:card", "twitter:title", "twitter:description"]:
            if tag not in c:
                errors.append(f"[{rel_p}] Missing social meta tag: {tag}")
                
    # 8. Schema.org JSON-LD
    if "privacy" not in rel_p and "terms" not in rel_p:
        m_schema = re.search(r'<script\s+type=["\']application/ld\+json["\']>(.*?)</script>', c, re.IGNORECASE | re.DOTALL)
        if not m_schema:
            errors.append(f"[{rel_p}] Missing JSON-LD schema")
        else:
            try:
                s_json = json.loads(m_schema.group(1))
                # verify datePublished, dateModified, author
                s_str = json.dumps(s_json)
                if "datePublished" not in s_str or "dateModified" not in s_str:
                    errors.append(f"[{rel_p}] JSON-LD missing datePublished/dateModified")
                if "author" not in s_str:
                    errors.append(f"[{rel_p}] JSON-LD missing author attribution")
                if "FAQPage" not in s_str:
                    errors.append(f"[{rel_p}] JSON-LD missing FAQPage schema")
            except Exception as e:
                errors.append(f"[{rel_p}] JSON-LD parse error: {e}")
                
    # 9. About & Contact links in footer
    if "about.html" not in c or "contact.html" not in c:
        errors.append(f"[{rel_p}] Missing About or Contact links in footer")

    # 10. Question-Style headings in rich content
    if "privacy" not in rel_p and "terms" not in rel_p:
        question_h3s = re.findall(r'<h3[^>]*>([^\?]+)\?</h3>', c, re.IGNORECASE)
        if len(question_h3s) < 2:
            errors.append(f"[{rel_p}] Insufficient question-style headings: {len(question_h3s)}")

# 11. Check robots.txt
robots_path = os.path.join(BASE_DIR, "robots.txt")
with open(robots_path, "r", encoding="utf-8") as f:
    rob = f.read()
for crawler in ["GPTBot", "Google-Extended", "CCBot", "PerplexityBot", "ClaudeBot", "ChatGPT-User"]:
    if crawler not in rob:
        errors.append(f"[robots.txt] Missing crawler permission: {crawler}")
if "sitemap.xml" not in rob:
    errors.append("[robots.txt] Missing sitemap reference")

# 12. Check sitemap.xml
sitemap_path = os.path.join(BASE_DIR, "sitemap.xml")
try:
    tree = ET.parse(sitemap_path)
    root = tree.getroot()
    urls_in_sitemap = [elem.text for elem in root.iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
    print(f"URLs in sitemap.xml: {len(urls_in_sitemap)}")
    if len(urls_in_sitemap) < 105:
        errors.append(f"[sitemap.xml] URL count too low: {len(urls_in_sitemap)}")
except Exception as e:
    errors.append(f"[sitemap.xml] XML parsing error: {e}")

# 13. Check llms.txt
llms_path = os.path.join(BASE_DIR, "llms.txt")
with open(llms_path, "r", encoding="utf-8") as f:
    llms_txt = f.read()
if "About Us" not in llms_txt or "Contact Us" not in llms_txt:
    errors.append("[llms.txt] Missing About/Contact references")

print("\n--- SEO AUDIT RESULTS ---")
if errors:
    print(f"FAILED with {len(errors)} errors:")
    categories = {}
    for e in errors:
        msg = e.split("] ", 1)[-1] if "] " in e else e
        categories[msg] = categories.get(msg, 0) + 1
    for msg, count in categories.items():
        print(f"  ({count}x) {msg}")
else:
    print(f"ALL {len(pages_to_check)} PAGES PASSED 100% OF THE SEO AUDIT CHECKS WITH ZERO ERRORS!")
