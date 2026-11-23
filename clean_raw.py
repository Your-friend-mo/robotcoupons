import re

path = r"c:\Users\m\Documents\robotcoupons\raw_homepage.html"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()

# Remove ogads_locker popup block
text = re.sub(r'<div id=["\']ogads_locker["\'].*?</div>\s*</div>', '', text, flags=re.DOTALL)
# Remove old OGadslink script block
text = re.sub(r'<script>\s*let code\s*=\s*[\'"].*?let url\s*=\s*OGadslink;?\s*</script>', '', text, flags=re.DOTALL)

with open(path, "w", encoding="utf-8") as f:
    f.write(text)

print("Cleaned ogads_locker and old scripts from raw_homepage.html.")
