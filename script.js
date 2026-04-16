/* ============================================================
   เหล็กใต้ — South Steel Co., Ltd.
   script.js — Main JavaScript
   ============================================================ */

/* --- Mobile Navigation --- */
(function () {
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileMenu = document.querySelector('.nav__mobile');

  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', function () {
    const isOpen = mobileMenu.classList.toggle('is-open');
    hamburger.classList.toggle('is-open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('is-open');
      hamburger.classList.remove('is-open');
      document.body.style.overflow = '';
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
})();

/* --- Active nav link --- */
(function () {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link, .nav__mobile-link').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

/* --- Fade-in on scroll (Intersection Observer) --- */
(function () {
  const elements = document.querySelectorAll('.fade-in');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach(function (el) {
    observer.observe(el);
  });
})();

/* --- Product Filter Tabs --- */
(function () {
  const tabs = document.querySelectorAll('.filter-tab[data-filter]');
  const sections = document.querySelectorAll('.product-section[data-category]');
  if (!tabs.length || !sections.length) return;

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function (e) {
      e.preventDefault();
      const filter = tab.getAttribute('data-filter');

      // Update active tab
      tabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');

      // Show/hide sections
      sections.forEach(function (section) {
        if (filter === 'all' || section.getAttribute('data-category') === filter) {
          section.style.display = '';
        } else {
          section.style.display = 'none';
        }
      });
    });
  });
})();

/* --- GA4 Event Tracking --- */
function trackGA(eventName, params) {
  if (typeof gtag === 'function') {
    gtag('event', eventName, params);
  }
}

// Track phone call clicks
document.querySelectorAll('a[href^="tel:"]').forEach(function (el) {
  el.addEventListener('click', function () {
    trackGA('click', { event_category: 'contact', event_label: 'phone_call' });
  });
});

// Track Line clicks
document.querySelectorAll('a[href*="line.me"], a[href*="line://"]').forEach(function (el) {
  el.addEventListener('click', function () {
    trackGA('click', { event_category: 'contact', event_label: 'line_chat' });
  });
});

// Track Facebook clicks
document.querySelectorAll('a[href*="facebook.com"]').forEach(function (el) {
  el.addEventListener('click', function () {
    trackGA('click', { event_category: 'social', event_label: 'facebook' });
  });
});

// Track form submit
document.querySelectorAll('form').forEach(function (form) {
  form.addEventListener('submit', function () {
    trackGA('form_submit', { event_category: 'lead', event_label: 'contact_form' });
  });
});
