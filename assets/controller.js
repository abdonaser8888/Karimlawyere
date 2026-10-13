(function() {
  console.log("Karim Hisham Law Office App Controller Initializing...");

  // 1. Service Filter Logic (Overview Tab)
  function applyServiceFilter(filterCategory) {
    var cards = document.querySelectorAll('[data-testid="store-collections"] > div');
    var filterBtns = document.querySelectorAll('[data-service-filter]');

    cards.forEach(function(card) {
      var cardCat = card.getAttribute('data-category');
      if (!cardCat || filterCategory === 'all' || cardCat === filterCategory) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });

    filterBtns.forEach(function(btn) {
      var target = btn.getAttribute('data-service-filter');
      var innerDiv = btn.querySelector('div');
      var pText = btn.querySelector('p') || btn;

      if (target === filterCategory) {
        btn.classList.add('active');
        btn.style.setProperty('background-color', 'rgba(255, 255, 255, 0.98)', 'important');
        btn.style.setProperty('border-color', '#ffffff', 'important');
        btn.style.setProperty('color', '#111111', 'important');
        if (innerDiv) {
          innerDiv.style.setProperty('background-color', 'rgba(255, 255, 255, 0.98)', 'important');
          innerDiv.style.setProperty('border-color', '#ffffff', 'important');
        }
        if (pText && pText !== btn) pText.style.setProperty('color', '#111111', 'important');
      } else {
        btn.classList.remove('active');
        btn.style.setProperty('background-color', 'hsla(76, 5.9%, 58%, 0.85)', 'important');
        btn.style.setProperty('border-color', 'hsl(76, 5.9%, 58%)', 'important');
        btn.style.setProperty('color', '#ffffff', 'important');
        if (innerDiv) {
          innerDiv.style.setProperty('background-color', 'hsla(76, 5.9%, 58%, 0.85)', 'important');
          innerDiv.style.setProperty('border-color', 'hsl(76, 5.9%, 58%)', 'important');
        }
        if (pText && pText !== btn) pText.style.setProperty('color', '#ffffff', 'important');
      }
    });
  }

  // 2. Main Tab Switching Logic
  function switchMainTab(tabId, shouldScroll) {
    var tabBtns = document.querySelectorAll('[data-tab-target]');
    var filterBar = document.getElementById('overview-services-filter-bar');
    var servicesHeader = document.querySelector('[data-testid="store-collections-header"]');
    var servicesGrid = document.querySelector('[data-testid="store-collections"]');
    var locationHoursSection = document.getElementById('lawyer-office-location');
    var faqSection = document.getElementById('faq-section');

    var contactView = document.getElementById('contact-view');
    var bookingView = document.getElementById('booking-view');
    var aboutView = document.getElementById('about-view');

    // Update active state on top pills
    tabBtns.forEach(function(btn) {
      var target = btn.getAttribute('data-tab-target');
      var pillBtn = btn.querySelector('.tab-pill-btn') || btn.querySelector('button');
      var text = btn.querySelector('.tab-pill-text') || btn.querySelector('p');
      var badge = btn.querySelector('.pill-icon-badge');
      var svg = btn.querySelector('svg');

      var isActive = (target === tabId);
      if (isActive) {
        btn.classList.add('active');
        if (pillBtn) {
          pillBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
          pillBtn.style.borderColor = '#ffffff';
        }
        if (text) text.style.color = '#111111';
        if (badge) {
          badge.style.backgroundColor = 'rgba(0, 0, 0, 0.08)';
          badge.style.borderColor = 'rgba(0, 0, 0, 0.12)';
        }
        if (svg) svg.style.stroke = '#111111';
      } else {
        btn.classList.remove('active');
        if (pillBtn) {
          pillBtn.style.backgroundColor = 'hsla(76, 5.9%, 58%, 0.85)';
          pillBtn.style.borderColor = 'hsl(76, 5.9%, 58%)';
        }
        if (text) text.style.color = '#ffffff';
        if (badge) {
          badge.style.backgroundColor = 'rgba(255, 255, 255, 0.18)';
          badge.style.borderColor = 'rgba(255, 255, 255, 0.25)';
        }
        if (svg) svg.style.stroke = '#ffffff';
      }
    });

    function setView(el, show, displayVal) {
      if (!el) return;
      if (show) {
        el.style.setProperty('display', displayVal || 'block', 'important');
      } else {
        el.style.setProperty('display', 'none', 'important');
      }
    }

    var filterBar = document.getElementById('overview-services-filter-bar') ||
                    (document.querySelector('menu._rail_s6ztx_22') ?
                     document.querySelector('menu._rail_s6ztx_22').closest('.relative') : null);

    // Handle view visibility per tab
    if (tabId === 'overview') {
      setView(filterBar, true, 'block');
      setView(servicesHeader, true, 'block');
      setView(servicesGrid, true, 'flex');
      setView(locationHoursSection, true, 'block');
      setView(faqSection, true, 'block');
      setView(contactView, false);
      setView(bookingView, false);
      setView(aboutView, false);
    } else if (tabId === 'contact') {
      setView(filterBar, false);
      setView(servicesHeader, false);
      setView(servicesGrid, false);
      setView(faqSection, false);
      setView(bookingView, false);
      setView(aboutView, false);
      setView(contactView, true, 'block');
      setView(locationHoursSection, true, 'block');
    } else if (tabId === 'booking') {
      setView(filterBar, false);
      setView(servicesHeader, false);
      setView(servicesGrid, false);
      setView(locationHoursSection, false);
      setView(faqSection, false);
      setView(contactView, false);
      setView(aboutView, false);
      setView(bookingView, true, 'block');
    } else if (tabId === 'faq') {
      setView(filterBar, false);
      setView(servicesHeader, false);
      setView(servicesGrid, false);
      setView(locationHoursSection, false);
      setView(contactView, false);
      setView(bookingView, false);
      setView(aboutView, false);
      setView(faqSection, true, 'block');
    } else if (tabId === 'about') {
      setView(filterBar, false);
      setView(servicesHeader, false);
      setView(servicesGrid, false);
      setView(faqSection, false);
      setView(contactView, false);
      setView(bookingView, false);
      setView(aboutView, true, 'block');
      setView(locationHoursSection, true, 'block');
    }

    if (shouldScroll) {
      var topOffset = document.querySelector('[data-testid="store-navigation-bar"]');
      if (topOffset) {
        var y = topOffset.getBoundingClientRect().top + window.pageYOffset - 10;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }

  // 3. Bind FAQ Accordion Items Directly
  function initFaqAccordion() {
    var items = document.querySelectorAll('.faq-item');
    items.forEach(function(item) {
      var btn = item.querySelector('.faq-trigger');
      var content = item.querySelector('.faq-content');
      var icon = item.querySelector('.faq-icon');
      if (btn && content) {
        btn.onclick = function(e) {
          e.preventDefault();
          e.stopPropagation();
          var isOpen = (content.style.display === 'block');
          document.querySelectorAll('.faq-content').forEach(function(c) { c.style.display = 'none'; });
          document.querySelectorAll('.faq-icon').forEach(function(ic) { ic.style.transform = 'rotate(0deg)'; });
          if (!isOpen) {
            content.style.display = 'block';
            if (icon) icon.style.transform = 'rotate(180deg)';
          }
        };
      }
    });
  }

  // 4. WhatsApp Booking Form Handler
  function initBookingForm() {
    var bookingForm = document.getElementById('whatsapp-booking-form');
    if (bookingForm) {
      bookingForm.onsubmit = function(e) {
        e.preventDefault();
        var name = document.getElementById('bk-name').value.trim();
        var phone = document.getElementById('bk-phone').value.trim();
        var type = document.getElementById('bk-type').value;
        var time = document.getElementById('bk-time').value.trim();
        var notes = document.getElementById('bk-notes').value.trim();

        var msgParts = [
          "السلام عليكم، أود حجز موعد استشارة قانونية لدى الأستاذ كريم هشام جميل:",
          "👤 الاسم: " + name,
          "📱 الهاتف: " + phone,
          "⚖️ نوع الاستشارة: " + type
        ];
        if (time) msgParts.push("🗓️ الموعد المفضل: " + time);
        if (notes) msgParts.push("📝 تفاصيل مختصرة: " + notes);

        var fullMsg = msgParts.join(String.fromCharCode(10));
        var encoded = encodeURIComponent(fullMsg);
        window.open('https://wa.me/201124411711?text=' + encoded, '_blank');
      };
    }
  }

  // 5. Global Capture Click Listener
  document.addEventListener('click', function(e) {
    // Tab pill clicks
    var mainTab = e.target.closest('[data-tab-target]');
    if (mainTab) {
      e.preventDefault();
      var targetTab = mainTab.getAttribute('data-tab-target');
      switchMainTab(targetTab, true);
      try { history.replaceState(null, '', '#' + targetTab); } catch(err) {}
      return;
    }

    // Service filter clicks
    var sFilter = e.target.closest('[data-service-filter]');
    if (sFilter) {
      e.preventDefault();
      var targetFilter = sFilter.getAttribute('data-service-filter');
      applyServiceFilter(targetFilter);
      return;
    }
  }, true);

  // 6. Direct click binding for tabs and service filters
  function bindAllDirectListeners() {
    document.querySelectorAll('[data-tab-target]').forEach(function(btn) {
      btn.onclick = function(e) {
        e.preventDefault();
        var targetTab = btn.getAttribute('data-tab-target');
        switchMainTab(targetTab, true);
        try { history.replaceState(null, '', '#' + targetTab); } catch(err) {}
      };
    });

    document.querySelectorAll('[data-service-filter]').forEach(function(btn) {
      btn.onclick = function(e) {
        e.preventDefault();
        var targetFilter = btn.getAttribute('data-service-filter');
        applyServiceFilter(targetFilter);
      };
    });

    var filterIcon = document.querySelector('.filter-icon-btn');
    if (filterIcon) {
      filterIcon.onclick = function(e) {
        e.preventDefault();
        applyServiceFilter('all');
      };
    }
  }

  // 6. Verified Badge Popover (Click Only)
  function initVerifiedBadge() {
    var btn = document.querySelector('[data-testid="follow-store-button"]');
    var badge = document.getElementById('vorocom-verified-badge');
    if (!btn || !badge) return;

    btn.onclick = function(e) {
      e.stopPropagation();
      var isShown = badge.style.display === 'block';
      badge.style.display = isShown ? 'none' : 'block';
    };

    document.addEventListener('click', function(e) {
      if (badge && badge.style.display === 'block' && !btn.contains(e.target)) {
        badge.style.display = 'none';
      }
    });
  }

  // 7. Store Menu Drawer (Shop.app / Apple Minimalist Style)
  function initStoreMenuDrawer() {
    var menuBtn = document.querySelector('[data-testid="store-menu-button"]');
    var scrim = document.getElementById('store-menu-scrim');
    var overlay = document.getElementById('store-menu-overlay');
    var dialog = document.getElementById('store-menu-dialog');
    var closeBtn = document.getElementById('store-menu-close-btn');
    var shareBtn = document.getElementById('store-menu-share-btn');

    var container = document.getElementById('store-menu-container');

    function openDrawer() {
      if (scrim) scrim.classList.add('open');
      if (overlay) overlay.classList.add('open');
      if (dialog) dialog.classList.add('open');
      if (container) container.classList.add('open');
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    }

    function closeDrawer() {
      if (scrim) scrim.classList.remove('open');
      if (overlay) overlay.classList.remove('open');
      if (dialog) dialog.classList.remove('open');
      if (container) container.classList.remove('open');
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    if (menuBtn) {
      menuBtn.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();
        openDrawer();
      };
    }

    if (closeBtn) {
      closeBtn.onclick = function(e) {
        e.preventDefault();
        closeDrawer();
      };
    }

    if (scrim) scrim.onclick = closeDrawer;
    if (overlay) overlay.onclick = closeDrawer;

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && dialog && dialog.classList.contains('open')) {
        closeDrawer();
      }
    });

    // Drawer Nav items
    document.querySelectorAll('[data-drawer-nav]').forEach(function(item) {
      item.onclick = function(e) {
        var target = item.getAttribute('data-drawer-nav');
        if (target === 'location') {
          switchMainTab('overview', false);
          closeDrawer();
          setTimeout(function() {
            var locEl = document.getElementById('lawyer-office-location');
            if (locEl) locEl.scrollIntoView({ behavior: 'smooth' });
          }, 250);
        } else {
          switchMainTab(target, true);
          try { history.replaceState(null, '', '#' + target); } catch(err) {}
          closeDrawer();
        }
      };
    });

    // Share Button Handler
    if (shareBtn) {
      shareBtn.onclick = function(e) {
        e.preventDefault();
        var shareData = {
          title: 'مكتب الأستاذ كريم هشام جميل - المحامي بالاستئناف العالي ومجلس الدولة',
          text: 'استشارات قانونية موثقة وقضايا جنائية ومدنية وأسرة وتأسيس شركات',
          url: window.location.href
        };
        if (navigator.share) {
          navigator.share(shareData).catch(function() {});
        } else {
          try {
            navigator.clipboard.writeText(window.location.href).then(function() {
              alert('تم نسخ رابط صفحة المكتب بنجاح!');
            }).catch(function() {
              window.open('https://wa.me/?text=' + encodeURIComponent(shareData.title + ' ' + shareData.url), '_blank');
            });
          } catch(err) {
            window.open('https://wa.me/?text=' + encodeURIComponent(shareData.title + ' ' + shareData.url), '_blank');
          }
        }
      };
    }
  }

  // 8. Initialize
  function init() {
    initFaqAccordion();
    initBookingForm();
    initVerifiedBadge();
    initStoreMenuDrawer();
    bindAllDirectListeners();

    var hash = window.location.hash.replace('#', '');
    var validTabs = ['overview', 'contact', 'booking', 'faq', 'about'];
    if (validTabs.indexOf(hash) !== -1) {
      switchMainTab(hash, false);
    } else {
      switchMainTab('overview', false);
    }
    applyServiceFilter('all');
    window.__lawyerControllerInitialized = true;
    console.log("Lawyer Controller Successfully Initialized!");
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  setTimeout(init, 200);
  setTimeout(init, 800);
})();
