import re

html_path = r'c:\Users\gogo\Desktop\VoroCom HQ\preview_shop\shop.com\m\comfrt.html'

with open(html_path, 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

# Replace col-start-2 in content-wrapper-root if present
html = html.replace('col-start-2 row-start-1 w-full lg:max-w-[calc(100vw-4.75rem)] lg:p-space-8 lg:pl-0', 'col-start-1 row-start-1 w-full p-2')
html = html.replace('lg:max-w-[calc(100vw-4.75rem)]', 'w-full')
html = html.replace('lg:pl-0', '')

# Inject style rules for slim white margin framing and rounded corners
slim_margin_style = '''
<style id="slim-margin-styling">
  /* Slim white frame around the website with preserved rounded corners */
  [data-id="content-wrapper-root"] {
    grid-column: 1 / -1 !important;
    max-width: 100% !important;
    padding: 8px !important;
    margin: 0 auto !important;
  }

  [data-testid="store-screen-v2"] {
    border-radius: 24px !important;
    overflow: hidden !important;
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06) !important;
  }

  /* Disable original sticky overlay mask */
  [data-id="content-wrapper-root"] > .pointer-events-none.sticky {
    display: none !important;
  }

  body {
    background-color: #ffffff !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow-x: hidden !important;
  }
</style>
'''

if '</head>' in html:
    html = html.replace('</head>', slim_margin_style + '</head>', 1)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html)

print("Applied slim margin and visible rounded corner styling successfully!")
