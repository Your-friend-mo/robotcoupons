import os

base_dir = r"c:\Users\m\Documents\robotcoupons"

fav_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="16" fill="#2c2c2e"/>
  <circle cx="32" cy="12" r="4" fill="#ff9f1c"/>
  <line x1="32" y1="16" x2="32" y2="22" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
  <rect x="16" y="22" width="32" height="28" rx="8" fill="#6dd5ed" stroke="#ffffff" stroke-width="2.5"/>
  <circle cx="25" cy="33" r="3.5" fill="#ffffff"/>
  <circle cx="25" cy="33" r="1.5" fill="#111111"/>
  <circle cx="39" cy="33" r="3.5" fill="#ffffff"/>
  <circle cx="39" cy="33" r="1.5" fill="#111111"/>
  <rect x="24" y="41" width="16" height="4" rx="2" fill="#ffffff"/>
</svg>"""

fav_path = os.path.join(base_dir, "view", "assets", "images", "favicon.png")
fav_ico = os.path.join(base_dir, "favicon.ico")
os.makedirs(os.path.dirname(fav_path), exist_ok=True)
with open(fav_path, "w", encoding="utf-8") as f:
    f.write(fav_svg)
with open(fav_ico, "w", encoding="utf-8") as f:
    f.write(fav_svg)

missing = ["eldenringnightreign.jpg", "tiktok.png"]
for m in missing:
    p = os.path.join(base_dir, "coupon_img", m)
    if not os.path.exists(p) or os.path.getsize(p) == 0:
        with open(p, "w", encoding="utf-8") as f:
            f.write(fav_svg)

print("Created favicon.ico, favicon.png, and placeholder fallbacks.")
