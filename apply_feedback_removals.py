import re

html_path = r'c:\Users\gogo\Desktop\VoroCom HQ\preview_shop\shop.com\m\comfrt.html'

with open(html_path, 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

# 1. Remove HeaderWrapper
start_hw = html.find('<div data-testid="HeaderWrapper"')
if start_hw != -1:
    pos_header_end = html.find('</header>', start_hw)
    if pos_header_end != -1:
        end_hw = html.find('</div></div>', pos_header_end) + len('</div></div>')
        print(f"Removing HeaderWrapper from {start_hw} to {end_hw} ({end_hw - start_hw} bytes)")
        html = html[:start_hw] + html[end_hw:]
    else:
        print("Header end not found")
else:
    print("HeaderWrapper not found")

# 2. Remove bottom-omnibox-container
start_omni = html.find('<div data-testid="bottom-omnibox-container"')
if start_omni != -1:
    end_omni = html.find('<div data-testid="store-screen-v2"', start_omni)
    if end_omni != -1:
        print(f"Removing omnibox from {start_omni} to {end_omni} ({end_omni - start_omni} bytes)")
        html = html[:start_omni] + html[end_omni:]
    else:
        print("store-screen-v2 not found after omnibox")
else:
    print("bottom-omnibox-container not found")

# 3. Replace grid-cols-[4.75rem_1fr] with grid-cols-1
html = html.replace('grid-cols-[4.75rem_1fr]', 'grid-cols-1')

# 4. Inject CSS style rule to guarantee no remnant margins/offsets
removal_css = '''<style>
[data-testid="HeaderWrapper"],
[data-testid="header"],
[data-testid="bottom-omnibox-container"],
[data-testid="omnibox-container"] {
  display: none !important;
}
div[class*="grid-cols-[4.75rem_1fr]"] {
  grid-template-columns: 1fr !important;
}
</style>
'''
if '</head>' in html:
    html = html.replace('</head>', removal_css + '</head>', 1)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html)

print("Applied removals successfully!")
