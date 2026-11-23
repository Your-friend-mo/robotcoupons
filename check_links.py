import os
from bs4 import BeautifulSoup

base_dir = r"c:\Users\m\Documents\robotcoupons"
index_path = os.path.join(base_dir, "index.html")

with open(index_path, "r", encoding="utf-8") as f:
    soup = BeautifulSoup(f.read(), "html.parser")

broken = []
total = 0
for a in soup.find_all("a", href=True):
    href = a["href"]
    if href.startswith("#") or href.startswith("http") or href.startswith("javascript:"):
        continue
    total += 1
    clean_href = href.split("?")[0].split("#")[0].lstrip("/")
    target = os.path.normpath(os.path.join(base_dir, clean_href))
    if not os.path.exists(target):
        broken.append((href, target))

print(f"Checked {total} relative links in index.html.")
print(f"Broken links: {len(broken)}")
for b in broken[:10]:
    print(" ", b)
