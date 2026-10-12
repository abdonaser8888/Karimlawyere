html_path = r'c:\Users\gogo\Desktop\VoroCom HQ\preview_shop\shop.com\m\comfrt.html'

with open(html_path, 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

# Build the Executive Services Section
services_html = """
<!-- SERVICES SECTION (OPTION 1: 2-COLUMN EXECUTIVE CARDS) -->
<section id="services-section" class="mt-space-32 mb-space-48">
  <div class="mb-space-24 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
    <div>
      <h2 class="text-2xl sm:text-3xl font-black text-text m-0">الخدمات القانونية والتخصصات القضائية</h2>
      <p class="text-sm text-text-secondary mt-1 mb-0 font-semibold">مكتب الأستاذ كريم هشام جميل — المحامي بالاستئناف ومجلس الدولة</p>
    </div>
    <div class="flex items-center gap-2">
      <span class="text-xs font-bold text-text-secondary bg-bg-surface-neutral px-3.5 py-1.5 rounded-full border border-border-default">
        8 خدمات وتخصصات رئيسية
      </span>
      <a href="tel:01124411711" class="text-xs font-bold bg-text text-text-inverse px-3.5 py-1.5 rounded-full no-underline shadow-sm">
        اتصال: <span dir="ltr">011-244-11-7-11</span>
      </a>
    </div>
  </div>

  <!-- 2-COLUMN GRID -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

    <!-- CARD 1: جنايات وجنح -->
    <div class="bg-bg-fill rounded-[28px] p-5 sm:p-6 border border-[#e5e5e7] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
      <div>
        <div class="relative w-full h-52 sm:h-60 rounded-[22px] overflow-hidden bg-bg-surface-neutral mb-4 group">
          <img src="/assets/lawyer/service_litigation.jpg" alt="الدفاع في قضايا الجنايات والجنح" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent"></div>
          <span class="absolute top-3.5 right-3.5 bg-black/85 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md">
            قضايا ومحاكم
          </span>
          <span class="absolute top-3.5 left-3.5 bg-rose-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
            حضور فوري وتحقيقات
          </span>
          <div class="absolute bottom-3.5 right-3.5 left-3.5 text-white">
            <span class="text-xs font-semibold text-neutral-300 block">الجنايات • الجنح • أمن الدولة</span>
            <h3 class="text-lg sm:text-xl font-black text-white m-0">الدفاع في قضايا الجنايات والجنح</h3>
          </div>
        </div>

        <p class="text-sm text-text-secondary font-medium leading-relaxed m-0 mb-4">
          تمثيل قضائي قوي واحترافي في كافة مراحل الدعوى الجنائية، بدءاً من حضور تحقيقات النيابة العامة وحتى المرافعة أمام محاكم الجنايات والجنح ومحكمة النقض.
        </p>

        <div class="bg-[#f7f7f8] rounded-2xl p-4 border border-[#e5e5e7] mb-5 space-y-2">
          <span class="text-xs font-extrabold text-text block mb-1">ما تشمله الخدمة القانونية:</span>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-text-secondary">
            <div class="flex items-center gap-1.5">
              <span class="text-emerald-600 font-black">✓</span>
              <span>حضور تحقيقات النيابة وقسم الشرطة</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-emerald-600 font-black">✓</span>
              <span>إعداد مذكرات الدفاع ودفوع البراءة</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-emerald-600 font-black">✓</span>
              <span>الترافع المباشر أمام الدوائر الجنائية</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-emerald-600 font-black">✓</span>
              <span>الطعن بالاستئناف والنقض وإشكالات التنفيذ</span>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-4 border-t border-[#e5e5e7] flex items-center justify-between gap-3">
        <span class="text-xs text-text-secondary font-bold">متابعة فورية للقضية</span>
        <div class="flex items-center gap-2">
          <button onclick="openServiceModal('الدفاع في قضايا الجنايات والجنح')" class="bg-black hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all cursor-pointer border-0">
            طلب استشارة وتوكيل
          </button>
          <a href="https://wa.me/201124411711?text=استفسار+بخصوص+قضية+جنائية+أو+جنحة" target="_blank" class="bg-emerald-50 text-emerald-800 hover:bg-emerald-100 font-bold text-xs px-3.5 py-2.5 rounded-full transition no-underline border border-emerald-200">
            واتساب
          </a>
        </div>
      </div>
    </div>

    <!-- CARD 2: تأسيس الشركات وهيئة الاستثمار -->
    <div class="bg-bg-fill rounded-[28px] p-5 sm:p-6 border border-[#e5e5e7] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
      <div>
        <div class="relative w-full h-52 sm:h-60 rounded-[22px] overflow-hidden bg-bg-surface-neutral mb-4 group">
          <img src="/assets/lawyer/service_corporate.jpg" alt="تأسيس الشركات وهيئة الاستثمار" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent"></div>
          <span class="absolute top-3.5 right-3.5 bg-black/85 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md">
            شركات واستثمار
          </span>
          <span class="absolute top-3.5 left-3.5 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
            هيئة الاستثمار GAFI
          </span>
          <div class="absolute bottom-3.5 right-3.5 left-3.5 text-white">
            <span class="text-xs font-semibold text-neutral-300 block">مساهمة • ذات مسؤولية محدودة • الشخص الواحد</span>
            <h3 class="text-lg sm:text-xl font-black text-white m-0">تأسيس الشركات والسجلات التجارية والصناعية</h3>
          </div>
        </div>

        <p class="text-sm text-text-secondary font-medium leading-relaxed m-0 mb-4">
          حزمة تأسيس قانونية متكاملة لرواد الأعمال والشركات من البداية وحتى استلام السجل والبطاقة الضريبية وبدء النشاط التجاري الفعلي.
        </p>

        <div class="bg-[#f7f7f8] rounded-2xl p-4 border border-[#e5e5e7] mb-5 space-y-2">
          <span class="text-xs font-extrabold text-text block mb-1">ما تشمله الخدمة القانونية:</span>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-text-secondary">
            <div class="flex items-center gap-1.5">
              <span class="text-emerald-600 font-black">✓</span>
              <span>صياغة عقود التأسيس والنظام الأساسي</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-emerald-600 font-black">✓</span>
              <span>استخراج السجل التجاري والصناعي والبطاقة الضريبية</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-emerald-600 font-black">✓</span>
              <span>إنهاء الموافقات والتراخيص بهيئة الاستثمار</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-emerald-600 font-black">✓</span>
              <span>فتح الملفات التأمينية للشركات والشركاء</span>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-4 border-t border-[#e5e5e7] flex items-center justify-between gap-3">
        <span class="text-xs text-text-secondary font-bold">تسليم كامل الأوراق باليد</span>
        <div class="flex items-center gap-2">
          <button onclick="openServiceModal('تأسيس الشركات وهيئة الاستثمار')" class="bg-black hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all cursor-pointer border-0">
            بدء إجراءات التأسيس
          </button>
          <a href="https://wa.me/201124411711?text=استفسار+بخصوص+تأسيس+شركة+أو+سجل+تجاري" target="_blank" class="bg-emerald-50 text-emerald-800 hover:bg-emerald-100 font-bold text-xs px-3.5 py-2.5 rounded-full transition no-underline border border-emerald-200">
            واتساب
          </a>
        </div>
      </div>
    </div>

    <!-- CARD 3: كتابة وصياغة العقود التجارية -->
    <div class="bg-bg-fill rounded-[28px] p-5 sm:p-6 border border-[#e5e5e7] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
      <div>
        <div class="relative w-full h-52 sm:h-60 rounded-[22px] overflow-hidden bg-bg-surface-neutral mb-4 group">
          <img src="/assets/lawyer/service_contracts.jpg" alt="صياغة العقود التجارية" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent"></div>
          <span class="absolute top-3.5 right-3.5 bg-black/85 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md">
            عقود واتفاقيات
          </span>
          <span class="absolute top-3.5 left-3.5 bg-neutral-900 text-white text-xs font-bold px-3 py-1.5 rounded-full">
            حماية قانونية محكمة
          </span>
          <div class="absolute bottom-3.5 right-3.5 left-3.5 text-white">
            <span class="text-xs font-semibold text-neutral-300 block">شراكة • توريد • مقاولات • توزيع • بيع</span>
            <h3 class="text-lg sm:text-xl font-black text-white m-0">كتابة وصياغة وتدقيق العقود التجارية</h3>
          </div>
        </div>

        <p class="text-sm text-text-secondary font-medium leading-relaxed m-0 mb-4">
          صياغة قانونية دقيقة ومحكمة تسد كافة الثغرات، وتحمي مصالحك التجارية والمالية، مع إحكام بنود الشروط الجزائية وفض النزاعات والتحكيم.
        </p>

        <div class="bg-[#f7f7f8] rounded-2xl p-4 border border-[#e5e5e7] mb-5 space-y-2">
          <span class="text-xs font-extrabold text-text block mb-1">ما تشمله الخدمة القانونية:</span>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-text-secondary">
            <div class="flex items-center gap-1.5">
              <span class="text-emerald-600 font-black">✓</span>
              <span>صياغة متخصصة لبنود العقد من الصفر</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-emerald-600 font-black">✓</span>
              <span>تدقيق العقود القائمة واكتشاف الثغرات</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-emerald-600 font-black">✓</span>
              <span>صياغة اتفاقيات عدم الإفصاح (NDA) وعدم المنافسة</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-emerald-600 font-black">✓</span>
              <span>توثيق رسمي وحضور جلسات التوقيع</span>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-4 border-t border-[#e5e5e7] flex items-center justify-between gap-3">
        <span class="text-xs text-text-secondary font-bold">تسليم المسودة خلال 48 ساعة</span>
        <div class="flex items-center gap-2">
          <button onclick="openServiceModal('صياغة وتدقيق العقود التجارية')" class="bg-black hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all cursor-pointer border-0">
            طلب صياغة عقد
          </button>
          <a href="https://wa.me/201124411711?text=استفسار+بخصوص+صياغة+أو+مراجعة+عقد" target="_blank" class="bg-emerald-50 text-emerald-800 hover:bg-emerald-100 font-bold text-xs px-3.5 py-2.5 rounded-full transition no-underline border border-emerald-200">
            واتساب
          </a>
        </div>
      </div>
    </div>

    <!-- CARD 4: قضايا الأسرة والأحوال الشخصية -->
    <div class="bg-bg-fill rounded-[28px] p-5 sm:p-6 border border-[#e5e5e7] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
      <div>
        <div class="relative w-full h-52 sm:h-60 rounded-[22px] overflow-hidden bg-bg-surface-neutral mb-4 group">
          <img src="/assets/lawyer/service_estate.jpg" alt="قضايا الأسرة والأحوال الشخصية" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent"></div>
          <span class="absolute top-3.5 right-3.5 bg-black/85 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md">
            أحوال شخصية
          </span>
          <span class="absolute top-3.5 left-3.5 bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
            سرية تامة
          </span>
          <div class="absolute bottom-3.5 right-3.5 left-3.5 text-white">
            <span class="text-xs font-semibold text-neutral-300 block">خلع • طلاق • نفقات • حضانة • ولاية تعليمية</span>
            <h3 class="text-lg sm:text-xl font-black text-white m-0">قضايا الأسرة والأحوال الشخصية</h3>
          </div>
        </div>

        <p class="text-sm text-text-secondary font-medium leading-relaxed m-0 mb-4">
          معالجة قانونية وإنسانية حكيمة لقضايا الأسرة، مع الأولوية لحفظ حقوق الموكل ومصلحة الأطفال، وسرعة استصدار الأحكام وتنفيذها.
        </p>

        <div class="bg-[#f7f7f8] rounded-2xl p-4 border border-[#e5e5e7] mb-5 space-y-2">
          <span class="text-xs font-extrabold text-text block mb-1">ما تشمله الخدمة القانونية:</span>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-text-secondary">
            <div class="flex items-center gap-1.5">
              <span class="text-emerald-600 font-black">✓</span>
              <span>دعاوى الخلع والطلاق للضرر والشقاق</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-emerald-600 font-black">✓</span>
              <span>دعاوى النفقات (عدة، متعة، صغار، أجر مسكن)</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-emerald-600 font-black">✓</span>
              <span>قضايا الحضانة والرؤية والولاية التعليمية</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-emerald-600 font-black">✓</span>
              <span>تنفيذ الأحكام وملاحقة المتخلفين عن السداد</span>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-4 border-t border-[#e5e5e7] flex items-center justify-between gap-3">
        <span class="text-xs text-text-secondary font-bold">جلسات تسوية ودية وقضائية</span>
        <div class="flex items-center gap-2">
          <button onclick="openServiceModal('قضايا الأسرة والأحوال الشخصية')" class="bg-black hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all cursor-pointer border-0">
            استشارة أسرية
          </button>
          <a href="https://wa.me/201124411711?text=استفسار+خاص+بخصوص+قضية+أسرة+أو+أحوال+شخصية" target="_blank" class="bg-emerald-50 text-emerald-800 hover:bg-emerald-100 font-bold text-xs px-3.5 py-2.5 rounded-full transition no-underline border border-emerald-200">
            واتساب
          </a>
        </div>
      </div>
    </div>

    <!-- CARD 5: القضايا المدنية ومجلس الدولة -->
    <div class="bg-bg-fill rounded-[28px] p-5 sm:p-6 border border-[#e5e5e7] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
      <div>
        <div class="relative w-full h-52 sm:h-60 rounded-[22px] overflow-hidden bg-bg-surface-neutral mb-4 group">
          <img src="/assets/lawyer/service_realestate.jpg" alt="القضايا المدنية ومجلس الدولة" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent"></div>
          <span class="absolute top-3.5 right-3.5 bg-black/85 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md">
            مدني وقضاء إداري
          </span>
          <span class="absolute top-3.5 left-3.5 bg-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
            مجلس الدولة
          </span>
          <div class="absolute bottom-3.5 right-3.5 left-3.5 text-white">
            <span class="text-xs font-semibold text-neutral-300 block">طعون القرارات الإدارية • دعاوى التعويضات • صحة ونفاذ</span>
            <h3 class="text-lg sm:text-xl font-black text-white m-0">القضايا المدنية ومنازعات مجلس الدولة</h3>
          </div>
        </div>

        <p class="text-sm text-text-secondary font-medium leading-relaxed m-0 mb-4">
          الترافع أمام دوائر محاكم القضاء الإداري بمجلس الدولة، ومباشرة الدعاوى المدنية الكبرى، والتعويضات، ومنازعات العقود والملكية العقارية.
        </p>

        <div class="bg-[#f7f7f8] rounded-2xl p-4 border border-[#e5e5e7] mb-5 space-y-2">
          <span class="text-xs font-extrabold text-text block mb-1">ما تشمله الخدمة القانونية:</span>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-text-secondary">
            <div class="flex items-center gap-1.5">
              <span class="text-emerald-600 font-black">✓</span>
              <span>الطعن على القرارات الإدارية السلبية والإيجابية</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-emerald-600 font-black">✓</span>
              <span>دعاوى صحة ونفاذ العقود وتثبيت الملكية</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-emerald-600 font-black">✓</span>
              <span>مطالبات التعويض عن الأضرار المادية والمعنوية</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-emerald-600 font-black">✓</span>
              <span>دعاوى الإيجارات والفرز والتجنيب وإنهاء الشيوع</span>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-4 border-t border-[#e5e5e7] flex items-center justify-between gap-3">
        <span class="text-xs text-text-secondary font-bold">دراسة قانونية مستفيضة للموقف</span>
        <div class="flex items-center gap-2">
          <button onclick="openServiceModal('القضايا المدنية ومجلس الدولة')" class="bg-black hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all cursor-pointer border-0">
            عرض الموقف القضائي
          </button>
          <a href="https://wa.me/201124411711?text=استفسار+بخصوص+قضية+مدنية+أو+مجلس+الدولة" target="_blank" class="bg-emerald-50 text-emerald-800 hover:bg-emerald-100 font-bold text-xs px-3.5 py-2.5 rounded-full transition no-underline border border-emerald-200">
            واتساب
          </a>
        </div>
      </div>
    </div>

    <!-- CARD 6: خدمات وزواج الأجانب -->
    <div class="bg-bg-fill rounded-[28px] p-5 sm:p-6 border border-[#e5e5e7] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
      <div>
        <div class="relative w-full h-52 sm:h-60 rounded-[22px] overflow-hidden bg-bg-surface-neutral mb-4 group">
          <img src="/assets/lawyer/service_ip.jpg" alt="خدمات وزواج الأجانب" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent"></div>
          <span class="absolute top-3.5 right-3.5 bg-black/85 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md">
            معاملات دولية
          </span>
          <span class="absolute top-3.5 left-3.5 bg-amber-500 text-black text-xs font-bold px-3 py-1.5 rounded-full">
            وزارة العدل والخارجية
          </span>
          <div class="absolute bottom-3.5 right-3.5 left-3.5 text-white">
            <span class="text-xs font-semibold text-neutral-300 block">توثيق رسمي • إقامات • تصاديق قنصلية</span>
            <h3 class="text-lg sm:text-xl font-black text-white m-0">خدمات وتوثيق زواج الأجانب والإقامات</h3>
          </div>
        </div>

        <p class="text-sm text-text-secondary font-medium leading-relaxed m-0 mb-4">
          إنهاء إجراءات توثيق عقود زواج الأجانب الرسمية بمكتب توثيق الأحوال الشخصية للأجانب بوزارة العدل، واستخراج الإقامات الرسمية ومتابعة السفارات.
        </p>

        <div class="bg-[#f7f7f8] rounded-2xl p-4 border border-[#e5e5e7] mb-5 space-y-2">
          <span class="text-xs font-extrabold text-text block mb-1">ما تشمله الخدمة القانونية:</span>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-text-secondary">
            <div class="flex items-center gap-1.5">
              <span class="text-emerald-600 font-black">✓</span>
              <span>توثيق عقود زواج الأجانب بوزارة العدل</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-emerald-600 font-black">✓</span>
              <span>التصديق من وزارة الخارجية والقنصليات والسفارات</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-emerald-600 font-black">✓</span>
              <span>استخراج إقامات الأجانب (سياحية، استثمارية، زوجية)</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-emerald-600 font-black">✓</span>
              <span>الترجمة المعتمدة وإنهاء الموافقات الرسمية</span>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-4 border-t border-[#e5e5e7] flex items-center justify-between gap-3">
        <span class="text-xs text-text-secondary font-bold">مرافقة شخصية وسرعة إنجاز</span>
        <div class="flex items-center gap-2">
          <button onclick="openServiceModal('خدمات وتوثيق زواج الأجانب والإقامات')" class="bg-black hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all cursor-pointer border-0">
            بدء إجراءات الزواج/الإقامة
          </button>
          <a href="https://wa.me/201124411711?text=استفسار+بخصوص+زواج+الأجانب+أو+الإقامات" target="_blank" class="bg-emerald-50 text-emerald-800 hover:bg-emerald-100 font-bold text-xs px-3.5 py-2.5 rounded-full transition no-underline border border-emerald-200">
            واتساب
          </a>
        </div>
      </div>
    </div>

    <!-- CARD 7: الضرائب المصرية والتأمينات -->
    <div class="bg-bg-fill rounded-[28px] p-5 sm:p-6 border border-[#e5e5e7] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
      <div>
        <div class="relative w-full h-52 sm:h-60 rounded-[22px] overflow-hidden bg-bg-surface-neutral mb-4 group">
          <img src="/assets/lawyer/service_tax.jpg" alt="الضرائب والتأمينات" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent"></div>
          <span class="absolute top-3.5 right-3.5 bg-black/85 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md">
            ضرائب وتأمينات
          </span>
          <span class="absolute top-3.5 left-3.5 bg-neutral-900 text-white text-xs font-bold px-3 py-1.5 rounded-full">
            حل النزاعات والطعون
          </span>
          <div class="absolute bottom-3.5 right-3.5 left-3.5 text-white">
            <span class="text-xs font-semibold text-neutral-300 block">دخل • قيمة مضافة • كسب عمل • تأمينات عمالية</span>
            <h3 class="text-lg sm:text-xl font-black text-white m-0">قضايا الضرائب المصرية والتأمينات الاجتماعية</h3>
          </div>
        </div>

        <p class="text-sm text-text-secondary font-medium leading-relaxed m-0 mb-4">
          تمثيل قانوني أمام مأموريات الضرائب ولجان الطعن الضريبي، والطعن على التقديرات الجزافية، وتسوية المديونيات التأمينية للأفراد والشركات.
        </p>

        <div class="bg-[#f7f7f8] rounded-2xl p-4 border border-[#e5e5e7] mb-5 space-y-2">
          <span class="text-xs font-extrabold text-text block mb-1">ما تشمله الخدمة القانونية:</span>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-text-secondary">
            <div class="flex items-center gap-1.5">
              <span class="text-emerald-600 font-black">✓</span>
              <span>الطعن على نماذج الفحص والتقديرات الجزافية</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-emerald-600 font-black">✓</span>
              <span>الحضور أمام لجان الطعن ولجان إنهاء المنازعات</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-emerald-600 font-black">✓</span>
              <span>تسوية وتخفيض مديونيات التأمينات الاجتماعية</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-emerald-600 font-black">✓</span>
              <span>رفع الحجوزات الإدارية الضريبية على الحسابات</span>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-4 border-t border-[#e5e5e7] flex items-center justify-between gap-3">
        <span class="text-xs text-text-secondary font-bold">حماية أموال الشركات وحساباتها</span>
        <div class="flex items-center gap-2">
          <button onclick="openServiceModal('قضايا الضرائب والتأمينات الاجتماعية')" class="bg-black hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all cursor-pointer border-0">
            تسوية ملف ضريبي
          </button>
          <a href="https://wa.me/201124411711?text=استفسار+بخصوص+نزاع+ضريبي+أو+تأمينات" target="_blank" class="bg-emerald-50 text-emerald-800 hover:bg-emerald-100 font-bold text-xs px-3.5 py-2.5 rounded-full transition no-underline border border-emerald-200">
            واتساب
          </a>
        </div>
      </div>
    </div>

    <!-- CARD 8: الخدمات الحكومية والمحاسبية -->
    <div class="bg-bg-fill rounded-[28px] p-5 sm:p-6 border border-[#e5e5e7] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
      <div>
        <div class="relative w-full h-52 sm:h-60 rounded-[22px] overflow-hidden bg-bg-surface-neutral mb-4 group">
          <img src="/assets/lawyer/service_dispute.jpg" alt="الخدمات الحكومية والمحاسبية" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent"></div>
          <span class="absolute top-3.5 right-3.5 bg-black/85 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md">
            خدمات شاملة
          </span>
          <span class="absolute top-3.5 left-3.5 bg-emerald-700 text-white text-xs font-bold px-3 py-1.5 rounded-full">
            تخليص واعتماد رسمي
          </span>
          <div class="absolute bottom-3.5 right-3.5 left-3.5 text-white">
            <span class="text-xs font-semibold text-neutral-300 block">تراخيص • شهر عقاري • ميزانيات معتمدة • دفاتر قانونية</span>
            <h3 class="text-lg sm:text-xl font-black text-white m-0">جميع الخدمات الحكومية والمحاسبية المتكاملة</h3>
          </div>
        </div>

        <p class="text-sm text-text-secondary font-medium leading-relaxed m-0 mb-4">
          فريق متمرس لإنهاء كافة المعاملات الحكومية المعقدة، واستخراج التراخيص والموافقات الرسمية، وتوفير الخدمات المحاسبية القانونية المعتمدة.
        </p>

        <div class="bg-[#f7f7f8] rounded-2xl p-4 border border-[#e5e5e7] mb-5 space-y-2">
          <span class="text-xs font-extrabold text-text block mb-1">ما تشمله الخدمة القانونية:</span>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-text-secondary">
            <div class="flex items-center gap-1.5">
              <span class="text-emerald-600 font-black">✓</span>
              <span>إنهاء معاملات الشهر العقاري والتوكيلات الرسمية</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-emerald-600 font-black">✓</span>
              <span>استخراج تراخيص التشغيل والأنشطة والمنشآت</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-emerald-600 font-black">✓</span>
              <span>إعداد الميزانيات واعتمادها من محاسب قانوني مقيد</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-emerald-600 font-black">✓</span>
              <span>متابعة الإجراءات لدى كافة الوزارات والمحافظات</span>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-4 border-t border-[#e5e5e7] flex items-center justify-between gap-3">
        <span class="text-xs text-text-secondary font-bold">توفير كامل للوقت والجهد والمشاوير</span>
        <div class="flex items-center gap-2">
          <button onclick="openServiceModal('الخدمات الحكومية والمحاسبية المتكاملة')" class="bg-black hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all cursor-pointer border-0">
            طلب إنهاء معاملة
          </button>
          <a href="https://wa.me/201124411711?text=استفسار+بخصوص+خدمات+حكومية+أو+محاسبية" target="_blank" class="bg-emerald-50 text-emerald-800 hover:bg-emerald-100 font-bold text-xs px-3.5 py-2.5 rounded-full transition no-underline border border-emerald-200">
            واتساب
          </a>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- IN-PAGE INTERACTIVE CONSULTATION MODAL (NO EXTERNAL PAGES) -->
<div id="service-booking-modal" style="display:none;" class="fixed inset-0 z-[100] bg-black/60 items-center justify-center p-4 backdrop-blur-sm">
  <div class="bg-white rounded-[28px] max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-neutral-200 relative animate-in fade-in zoom-in-95 duration-200">
    
    <button onclick="closeServiceModal()" class="absolute top-5 left-5 text-neutral-400 hover:text-black w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center cursor-pointer border-0">
      ✕
    </button>

    <div class="mb-5 text-right">
      <div class="w-10 h-10 rounded-2xl bg-neutral-100 text-black flex items-center justify-center text-lg mb-2">
        ⚖️
      </div>
      <h3 class="text-xl font-black text-neutral-900 m-0">طلب استشارة أو توكيل قانوني</h3>
      <p class="text-xs text-neutral-500 mt-1 mb-0" id="inpage-modal-subtitle">مكتب الأستاذ كريم هشام جميل (المحامي بالاستئناف)</p>
    </div>

    <form id="inpage-booking-form" onsubmit="handleInPageBooking(event)" class="space-y-4 text-xs font-bold text-neutral-700 text-right">
      <div>
        <label class="block mb-1 text-neutral-800">الخدمة المطلوبة</label>
        <input type="text" id="inpage-service-name" readonly class="w-full bg-neutral-100 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-neutral-900 font-black focus:outline-none" />
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label class="block mb-1 text-neutral-800">الاسم بالكامل *</label>
          <input type="text" id="client-name" required placeholder="مثال: أحمد محمود" class="w-full bg-white border border-neutral-200 rounded-xl px-3.5 py-2.5 text-neutral-900 focus:border-black focus:outline-none" />
        </div>
        <div>
          <label class="block mb-1 text-neutral-800">رقم الهاتف / واتساب *</label>
          <input type="tel" id="client-phone" required placeholder="01..." class="w-full bg-white border border-neutral-200 rounded-xl px-3.5 py-2.5 text-neutral-900 focus:border-black focus:outline-none" dir="ltr" />
        </div>
      </div>

      <div>
        <label class="block mb-1 text-neutral-800">تفاصيل أو نبذة عن الموضوع (سري للغاية)</label>
        <textarea id="client-details" rows="3" placeholder="اكتب نبذة مختصرة عن الموضوع القانوني..." class="w-full bg-white border border-neutral-200 rounded-xl p-3 text-neutral-900 focus:border-black focus:outline-none"></textarea>
      </div>

      <div class="pt-2 flex flex-col gap-2">
        <button type="submit" class="w-full bg-black hover:bg-neutral-800 text-white font-extrabold py-3.5 rounded-full text-sm shadow-md transition cursor-pointer border-0">
          إرسال الطلب والتواصل مع المكتب
        </button>
        <a id="inpage-direct-wa" href="https://wa.me/201124411711" target="_blank" class="w-full block text-center bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold py-3 rounded-full text-xs no-underline">
          💬 تواصل مباشر عبر واتساب الآن
        </a>
      </div>
    </form>

    <!-- Success Screen inside modal -->
    <div id="inpage-booking-success" style="display:none;" class="text-center py-6 space-y-3">
      <div class="w-14 h-14 bg-emerald-100 text-emerald-700 text-2xl rounded-full flex items-center justify-center mx-auto">
        ✓
      </div>
      <h4 class="text-lg font-black text-neutral-900 m-0">تم استلام طلبك بنجاح</h4>
      <p class="text-xs text-neutral-600 leading-relaxed max-w-sm mx-auto font-medium">
        سيقوم مكتب الأستاذ كريم هشام جميل بمراجعة الموضوع والتواصل معك هاتفياً أو عبر واتساب مباشرة.
      </p>
      <div class="pt-3">
        <button onclick="closeServiceModal()" class="bg-neutral-100 hover:bg-neutral-200 text-black font-bold px-6 py-2.5 rounded-full text-xs cursor-pointer border-0">
          إغلاق النافذة
        </button>
      </div>
    </div>

  </div>
</div>

<script>
function openServiceModal(serviceName) {
  document.getElementById('inpage-service-name').value = serviceName;
  document.getElementById('inpage-direct-wa').href = 'https://wa.me/201124411711?text=' + encodeURIComponent('مرحباً، أود استشارة بخصوص: ' + serviceName);
  document.getElementById('inpage-booking-form').style.display = 'block';
  document.getElementById('inpage-booking-success').style.display = 'none';
  const modal = document.getElementById('service-booking-modal');
  modal.style.display = 'flex';
}

function closeServiceModal() {
  document.getElementById('service-booking-modal').style.display = 'none';
}

function handleInPageBooking(e) {
  e.preventDefault();
  const service = document.getElementById('inpage-service-name').value;
  const name = document.getElementById('client-name').value;
  const phone = document.getElementById('client-phone').value;
  const details = document.getElementById('client-details').value;
  
  // Show success state
  document.getElementById('inpage-booking-form').style.display = 'none';
  document.getElementById('inpage-booking-success').style.display = 'block';

  // Optional: open WhatsApp with full text
  const waMsg = `طلب استشارة:\nالخدمة: ${service}\nالاسم: ${name}\nالهاتف: ${phone}\nتفاصيل: ${details}`;
  window.open('https://wa.me/201124411711?text=' + encodeURIComponent(waMsg), '_blank');
}

// Close on background click
document.getElementById('service-booking-modal').addEventListener('click', function(e) {
  if (e.target.id === 'service-booking-modal') {
    closeServiceModal();
  }
});
</script>
"""

# Place the services section right where StoreProductSearchPlaceHolder begins in the body
pos = html.find('data-testid="StoreProductSearchPlaceHolder"', 113000)
if pos != -1:
    # Find the opening tag of that container
    start_tag = html.rfind('<div', 0, pos)
    html = html[:start_tag] + services_html + '\n' + html[start_tag:]
    print("Inserted services section into body successfully!")
else:
    # Fallback before footer
    pos_footer = html.find('<footer')
    if pos_footer != -1:
        html = html[:pos_footer] + services_html + '\n' + html[pos_footer:]
        print("Inserted services section before footer successfully!")

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html)

print("Saved comfrt.html with services section!")
