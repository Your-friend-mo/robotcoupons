import os
import re
import json

base_dir = r"c:\Users\m\Documents\robotcoupons"
coupon_dir = os.path.join(base_dir, "coupon")

with open(os.path.join(base_dir, "coupons_list.json"), "r", encoding="utf-8") as f:
    coupons = json.load(f)

checks = [
    ("index.html", "www robotcoupons"),
    ("robotcoupons.html", "robotcoupons"),
    ("robotcoupons-com.html", "robotcoupons com"),
    ("www-robotcoupons.html", "www.robotcoupons"),
    ("www-robotcoupons-com.html", "www.robotcoupons.com"),
]

passed = 0
failed = 0

for fn, kw in checks:
    fp = os.path.join(base_dir, fn)
    with open(fp, "r", encoding="utf-8") as f:
        content = f.read()
    pattern = re.compile(re.escape(kw), re.IGNORECASE)
    cnt = len(pattern.findall(content))
    if cnt == 30:
        print(f"[PASS] {fn}: '{kw}' found {cnt}/30 times")
        passed += 1
    else:
        print(f"[FAIL] {fn}: '{kw}' found {cnt}/30 times")
        failed += 1

print("\nVerifying 100 Product Pages in coupon/ folder...")
for c in coupons:
    fn = f"{c['slug']}.html"
    fp = os.path.join(coupon_dir, fn)
    title = c['title']
    if not os.path.exists(fp):
        print(f"[FAIL] Missing file: {fn}")
        failed += 1
        continue
    with open(fp, "r", encoding="utf-8") as f:
        content = f.read()
    pattern = re.compile(re.escape(title), re.IGNORECASE)
    cnt = len(pattern.findall(content))
    if cnt == 30:
        passed += 1
    else:
        print(f"[FAIL] {fn}: '{title}' found {cnt}/30 times")
        failed += 1

print(f"\nVerification Results: {passed} PASSED, {failed} FAILED.")
assert failed == 0, f"{failed} files failed verification!"
print("ALL 105 PAGES 100% VERIFIED WITH EXACTLY 30 KEYWORD OCCURRENCES!")
