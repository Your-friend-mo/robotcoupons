import os
import re
import json
from bs4 import BeautifulSoup

base_dir = r"c:\Users\m\Documents\robotcoupons"
raw_html_path = os.path.join(base_dir, "raw_homepage.html")

with open(raw_html_path, "r", encoding="utf-8") as f:
    soup = BeautifulSoup(f.read(), "html.parser")

coupons = []
seen_slugs = set()

# Process cards in #all and .slider.responsive
for a in soup.select('a[href*="coupon/"]'):
    href = a.get('href', '')
    m = re.search(r'coupon/([^/]+?)\.html', href)
    if not m:
        continue
    slug = m.group(1)
    if slug in seen_slugs:
        continue
    seen_slugs.add(slug)
    
    title_el = a.select_one('h5, h6')
    title = title_el.text.strip() if title_el else slug.replace('-s-coupons-deals', '').replace('-s-coupons-deal', '').replace('-', ' ').title()
    
    rating_el = a.select_one('.rating-wrapp, .font-weight-200')
    rating_text = rating_el.text.strip() if rating_el else '1200 Ratings'
    m_rat = re.search(r'(\d+)', rating_text)
    ratings = int(m_rat.group(1)) if m_rat else 1250
    
    left_el = a.select_one('.single-coupon-left')
    left_text = left_el.text.strip() if left_el else 'Coupons Left: 1500'
    m_left = re.search(r'(\d+)', left_text)
    coupons_left = int(m_left.group(1)) if m_left else 1500
    
    desc_el = a.select_one('.one-line-small')
    desc = desc_el.text.strip() if desc_el else f"Verified discount codes, promo vouchers and free rewards for {title}."
    
    img_div = a.select_one('.single-coupon-image-top, .bg-image')
    bg_style = img_div.get('style', '') if img_div else ''
    img_url = ''
    m_url = re.search(r'url\([\'"]?([^\'"\)]+)[\'"]?\)', bg_style)
    if m_url:
        img_url = m_url.group(1)
        if img_url.startswith('../'):
            img_url = img_url[3:]
        elif img_url.startswith('/'):
            img_url = img_url[1:]
    
    is_top = 'single-coupon-top' in (a.get('class') or []) or bool(a.find_parent(class_='slider'))
    
    coupons.append({
        'slug': slug,
        'title': title,
        'ratings': ratings,
        'coupons_left': coupons_left,
        'desc': desc,
        'img': img_url,
        'top_pick': is_top,
        'href': f"coupon/{slug}.html"
    })

print(f"Successfully parsed {len(coupons)} unique coupons.")
output_json = os.path.join(base_dir, "coupons_list.json")
with open(output_json, "w", encoding="utf-8") as f:
    json.dump(coupons, f, indent=2)
print("Saved to", output_json)
