import re

html_path = r'c:\Users\gogo\Desktop\VoroCom HQ\preview_shop\shop.com\m\comfrt.html'
bak_path = r'c:\Users\gogo\Desktop\VoroCom HQ\preview_shop\shop.com\m\comfrt.html.bak'

with open(bak_path, 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

# 1. Update html tag with lang="ar" and dir="rtl"
html = re.sub(r'<html([^>]*)lang="[^"]*"', r'<html\1lang="ar" dir="rtl"', html)
if 'dir="rtl"' not in html[:300]:
    html = html.replace('<html', '<html lang="ar" dir="rtl"', 1)

# Add font-family styling for Arabic support
arabic_font_style = '''<style>
body, button, input, select, textarea, p, span, a, h1, h2, h3, h4, h5, h6 {
  font-family: 'Cairo', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Tahoma, Arial, sans-serif !important;
}
/* Hide sidebar and omnibox */
[data-testid="HeaderWrapper"],
[data-testid="header"],
[data-testid="bottom-omnibox-container"],
[data-testid="omnibox-container"] {
  display: none !important;
}
</style>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
'''
if '</head>' in html:
    html = html.replace('</head>', arabic_font_style + '</head>', 1)

# 2. Dictionary of exact string translations
translations = [
    ('<title>Comfrt - Shop</title>', '<title>كومفرت - شوب</title>'),
    ('Comfrt - Shop', 'كومفرت - شوب'),
    ('>Home<', '>الرئيسية<'),
    ('aria-label="Home"', 'aria-label="الرئيسية"'),
    ('>Explore<', '>استكشف<'),
    ('aria-label="Explore"', 'aria-label="استكشف"'),
    ('>View Cart<', '>عرض السلة<'),
    ('aria-label="View Cart"', 'aria-label="عرض السلة"'),
    ('>Deals<', '>العروض<'),
    ('aria-label="Deals"', 'aria-label="العروض"'),
    ('>Orders<', '>الطلبات<'),
    ('aria-label="Orders"', 'aria-label="الطلبات"'),
    ('placeholder="Search products and stores"', 'placeholder="ابحث عن منتجات ومتاجر"'),
    ('placeholder="Search Comfrt..."', 'placeholder="ابحث في كومفرت..."'),
    ('aria-label="Search Comfrt..."', 'aria-label="ابحث في كومفرت..."'),
    ('>Search Comfrt...<', '>ابحث في كومفرت...<'),
    ('aria-label="Clear search"', 'aria-label="مسح البحث"'),
    ('>Clear search<', '>مسح البحث<'),
    ('aria-label="Following"', 'aria-label="متابَع"'),
    ('>Following<', '>متابَع<'),
    ('aria-label="Follow"', 'aria-label="متابعة"'),
    ('>Follow<', '>متابعة<'),
    ('aria-label="Store menu"', 'aria-label="قائمة المتجر"'),
    ('502.2K Reviews', '502.2 ألف تقييم'),
    ('Reviews', 'تقييمات'),
    ('stars:', 'نجوم:'),
    ('>Shop all<', '>تسوق الكل<'),
    ('>Shop all Shop all<', '>تسوق الكل<'),
    ('>Hoodies<', '>هوديز<'),
    ('>Hoodies Hoodies<', '>هوديز<'),
    ('>Blankets<', '>بطاطين<'),
    ('>Blankets Blankets<', '>بطاطين<'),
    ('>Loungewear<', '>ملابس مريحة<'),
    ('>Loungewear Loungewear<', '>ملابس مريحة<'),
    ('>Kids<', '>أطفال<'),
    ('>Kids Kids<', '>أطفال<'),
    ('>Pets<', '>حيوانات أليفة<'),
    ('>Pets Pets<', '>حيوانات أليفة<'),
    ('>Travel<', '>سفر<'),
    ('>Travel Travel<', '>سفر<'),
    ('>View all collections<', '>عرض جميع المجموعات<'),
    ('>Products<', '>المنتجات<'),
    ('>Sort by<', '>ترتيب حسب<'),
    ('>On sale<', '>تخفيضات<'),
    ('>Price<', '>السعر<'),
    ('>In-stock<', '>متوفر بالمخزن<'),
    ('73% off', 'خصم 73%'),
    ('70% off', 'خصم 70%'),
    ('68% off', 'خصم 68%'),
    ('67% off', 'خصم 67%'),
    ('62% off', 'خصم 62%'),
    ('59% off', 'خصم 59%'),
    ('58% off', 'خصم 58%'),
    ('57% off', 'خصم 57%'),
    ('55% off', 'خصم 55%'),
    ('52% off', 'خصم 52%'),
    ('51% off', 'خصم 51%'),
    ('47% off', 'خصم 47%'),
    ('36% off', 'خصم 36%'),
    ('35% off', 'خصم 35%'),
    ('28% off', 'خصم 28%'),
    ('25% off', 'خصم 25%'),
    ('18% off', 'خصم 18%'),
    ('EGP', 'ج.م'),
    ('Minimalist Hoodie – Mega', 'هودي مينيماليست – ميجا'),
    ('Minimalist Hoodie  Mega', 'هودي مينيماليست – ميجا'),
    ('Signature Hoodie', 'هودي سيجنتشر'),
    ('Signature Sweatpants', 'بنطال رياضي سيجنتشر'),
    ('Minimalist Sweatpants', 'بنطال رياضي مينيماليست'),
    ('Dreamer Blanket', 'بطانية دريمر'),
    ('Cloud Zip Hoodie – Mega', 'هودي سحاب كلاود – ميجا'),
    ('Cloud Zip Hoodie  Mega', 'هودي سحاب كلاود – ميجا'),
    ('Cloud Lounge Tee', 'تيشيرت كلاود مريح'),
    ('Travel Essentials Hoodie', 'هودي أساسيات السفر'),
    ('Pastel Hoodie – Mega', 'هودي باستيل – ميجا'),
    ('Pastel Hoodie  Mega', 'هودي باستيل – ميجا'),
    ('Airplane Mode Travel Hoodie', 'هودي سفر إيربلين مود'),
    ('Cloud Lounge Shorts', 'شورت كلاود مريح'),
    ('Camo Hoodie – Mega', 'هودي مموه – ميجا'),
    ('Camo Hoodie  Mega', 'هودي مموه – ميجا'),
    ('Tranquil Hoodie', 'هودي ترانكول المهدئ'),
    ('Waffle Lounge Long Sleeve', 'تيشيرت وافل مريح بأكمام طويلة'),
    ('Waffle Lounge Pant', 'بنطال وافل مريح'),
    ('Travel Essentials Sweatpants', 'بنطال أساسيات السفر'),
    ('Airplane Mode Travel Sweatpants', 'بنطال سفر إيربلين مود'),
    ('Cloud Sweatpants', 'بنطال رياضي كلاود'),
    ('Camo Sweatpants', 'بنطال مموه'),
    ('Minimalist Straight Leg Sweatpants', 'بنطال مينيماليست بأرجل مستقيمة'),
    ('Cloud Lounge Pants', 'بنطال كلاود مريح'),
    ('Signature Straight Leg Sweatpants', 'بنطال سيجنتشر بأرجل مستقيمة'),
    ('Pastel Sweatpants', 'بنطال باستيل'),
    ('Tranquil Sweatpants', 'بنطال ترانكول'),
    ('Minimalist Kids Hoodie', 'هودي أطفال مينيماليست'),
    ('Airplane Mode Travel Zip Hoodie', 'هودي سفر بسحاب إيربلين مود'),
    ('Minimalist Kids Sweatpants', 'بنطال أطفال مينيماليست'),
    ('Affirmation Straight Leg Sweatpants', 'بنطال أفيرميشن بأرجل مستقيمة'),
    ('Signature Kids Hoodie', 'هودي أطفال سيجنتشر'),
    ('Affirmation Hoodie – Mega', 'هودي أفيرميشن – ميجا'),
    ('Affirmation Hoodie  Mega', 'هودي أفيرميشن – ميجا'),
    ('>Shopping designed around you.<', '>تسوق مصمم خصيصاً لك.<'),
    ('>Start selling<', '>ابدأ البيع<'),
    ('>For brands<', '>للعلامات التجارية<'),
    ('>For creators<', '>لصناع المحتوى<'),
    ('>Build your store<', '>أنشئ متجرك<'),
    ('>Information<', '>معلومات<'),
    ('>Shop Pay<', '>شوب باي<'),
    ('>Help center<', '>مركز المساعدة<'),
    ('>Social<', '>التواصل الاجتماعي<'),
    ('>Legal<', '>قانوني<'),
    ('>Terms of Service<', '>شروط الخدمة<'),
    ('>Privacy Policy<', '>سياسة الخصوصية<'),
    ('>Your Privacy Choices<', '>خيارات الخصوصية الخاصة بك<'),
    ('>Start selling for free<', '>ابدأ البيع مجاناً<'),
    ('Shopify Inc. 2026', 'شركة شوبيفاي 2026'),
]

for src_str, tgt_str in translations:
    html = html.replace(src_str, tgt_str)

html = re.sub(r'\((\d+(?:\.\d+)?)K\)', r'(\1 ألف)', html)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html)

print("Restored clean translated state successfully!")
