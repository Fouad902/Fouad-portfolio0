/* ============================================================
   MAIN — Core logic
   ============================================================ */

/* ============ PRELOADER ============ */
window.addEventListener('load', () => {
  const pre = document.getElementById('preloader');
  if (pre) {
    setTimeout(() => pre.classList.add('hidden'), 350);
  }
});

/* ============ THEME ============ */
const html = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
if (themeToggle) themeToggle.textContent = savedTheme === 'dark' ? '🌙' : '☀️';

themeToggle?.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  themeToggle.textContent = next === 'dark' ? '🌙' : '☀️';
  localStorage.setItem('theme', next);
});

/* ============ SCROLL PROGRESS ============ */
const progressBar = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
  const h = document.documentElement.scrollHeight - window.innerHeight;
  const p = (window.scrollY / h) * 100;
  if (progressBar) progressBar.style.width = p + '%';
}, { passive: true });

/* ============ NAVBAR SCROLL ============ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ============ MOBILE MENU ============ */
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
menuToggle?.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  mobileMenu?.classList.toggle('open');
});
mobileMenu?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    menuToggle?.classList.remove('active');
    mobileMenu?.classList.remove('open');
  });
});

/* ============ TYPING EFFECT ============ */
const typingEl = document.getElementById('typingText');
if (typingEl) {
  const words = [
    'scalable APIs.',
    'production systems.',
    'clean architecture.',
    'real impact.',
  ];
  let wordIdx = 0, charIdx = 0, deleting = false;

  const type = () => {
    const word = words[wordIdx];
    if (!deleting) {
      typingEl.textContent = word.slice(0, ++charIdx);
      if (charIdx === word.length) {
        deleting = true;
        setTimeout(type, 1900);
        return;
      }
      setTimeout(type, 70);
    } else {
      typingEl.textContent = word.slice(0, --charIdx);
      if (charIdx === 0) {
        deleting = false;
        wordIdx = (wordIdx + 1) % words.length;
        setTimeout(type, 400);
        return;
      }
      setTimeout(type, 35);
    }
  };
  setTimeout(type, 1000);
}

/* ============ SPLIT TEXT ============ */
function initSplitText() {
  document.querySelectorAll('.split-text:not(.split-ready)').forEach(el => {
    el.classList.add('split-ready');
    const text = el.textContent.trim();
    el.innerHTML = text.split('').map((c, i) =>
      `<span class="char" style="transition-delay:${i * 0.03}s">${c === ' ' ? '&nbsp;' : c}</span>`
    ).join('');

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    obs.observe(el);
  });
}

/* ============ SCROLL REVEAL ============ */
function initReveals() {
  const els = document.querySelectorAll('[data-reveal]:not(.revealed)');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = parseFloat(entry.target.style.getPropertyValue('--delay')) || 0;
        setTimeout(() => entry.target.classList.add('revealed'), delay * 1000);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  els.forEach(el => obs.observe(el));
}

/* ============ COUNTERS ============ */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]:not(.counted)');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.classList.add('counted');
        const target = +el.dataset.count;
        const suffix = el.dataset.suffix || '';
        const duration = 1500;
        const start = performance.now();

        const update = (now) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = Math.floor(target * eased) + suffix;
          if (t < 1) requestAnimationFrame(update);
          else el.textContent = target + suffix;
        };
        requestAnimationFrame(update);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => obs.observe(c));
}

/* ============ SKILL BARS ============ */
function initSkillBars() {
  const bars = document.querySelectorAll('.skill-bar-fill[data-level]:not(.filled)');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.classList.add('filled');
        const level = el.dataset.level;
        setTimeout(() => el.style.width = level + '%', 200);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  bars.forEach(b => obs.observe(b));
}

/* ============ TILT CARDS ============ */
function initTilt() {
  document.querySelectorAll('.tilt:not(.tilt-ready)').forEach(card => {
    card.classList.add('tilt-ready');
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const cx = r.width / 2;
      const cy = r.height / 2;
      const rx = ((y - cy) / cy) * -7;
      const ry = ((x - cx) / cx) * 7;
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ============ MAGNETIC BUTTONS ============ */
function initMagnetic() {
  document.querySelectorAll('.magnetic:not(.magnetic-ready)').forEach(btn => {
    btn.classList.add('magnetic-ready');
    btn.addEventListener('mousemove', (e) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      btn.style.transform = `translate(${x * 0.28}px, ${y * 0.38}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

/* ============ RIPPLE ============ */
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn, .icon-btn, .filter-btn');
  if (!btn) return;
  const r = btn.getBoundingClientRect();
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  const size = Math.max(r.width, r.height);
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = (e.clientX - r.left - size / 2) + 'px';
  ripple.style.top = (e.clientY - r.top - size / 2) + 'px';
  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 700);
});

/* ============ FAQ ============ */
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    q?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ============ CONFETTI ============ */
function fireConfetti() {
  const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'];
  for (let i = 0; i < 60; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.left = '50%';
    piece.style.top = '50%';
    piece.style.setProperty('--tx', (Math.random() - 0.5) * 800 + 'px');
    piece.style.setProperty('--ty', (Math.random() - 0.5) * 800 + 'px');
    piece.style.setProperty('--rot', (Math.random() * 720) + 'deg');
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 3000);
  }
}

/* ============ CONTACT FORM ============ */
const form = document.getElementById('contactForm');
form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const status = document.getElementById('formStatus');
  const btn = document.getElementById('submitBtn');
  const btnText = btn.querySelector('.btn-text');
  const btnLoading = btn.querySelector('.btn-loading');

  btnText.hidden = true;
  btnLoading.hidden = false;
  btn.disabled = true;
  status.textContent = '';
  status.className = 'form-status';

  const data = new FormData(form);

  try {
    // ⚠️ استبدل YOUR_FORM_ID بـ ID من formspree.io
    const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' },
    });

    if (res.ok) {
      status.textContent = "✓ Message sent! I'll get back to you soon.";
      status.classList.add('success');
      form.reset();
      fireConfetti();
    } else {
      throw new Error('Failed');
    }
  } catch (err) {
    status.textContent = '✗ Something went wrong. Email me: fouadkadrii896@gmail.com';
    status.classList.add('error');
  } finally {
    btnText.hidden = false;
    btnLoading.hidden = true;
    btn.disabled = false;
  }
});

/* ============ MARQUEE DUPLICATE ============ */
function initMarquee() {
  const track = document.querySelector('.marquee-track');
  if (track && track.children.length && !track.dataset.duped) {
    track.dataset.duped = 'true';
    track.innerHTML += track.innerHTML;
  }
}

/* ============ PAGE NAVIGATION WITH TRANSITION ============ */
document.querySelectorAll('a[href]:not([href^="#"]):not([href^="mailto"]):not([href^="http"]):not([target="_blank"])').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto')) return;
    const trans = document.querySelector('.page-transition');
    if (trans) {
      e.preventDefault();
      trans.classList.add('leaving');
      setTimeout(() => window.location.href = href, 550);
    }
  });
});

/* ============ SMOOTH SCROLL ============ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id.length < 2) return;
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ============ ACTIVE NAV LINK ============ */
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'main.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    a.classList.remove('active');
    if (href === path || (path === '' && href === 'main.html')) {
      a.classList.add('active');
    }
  });
}

/* ============ YEAR ============ */
document.querySelectorAll('#year').forEach(el => {
  el.textContent = new Date().getFullYear();
});

/* ============ PARALLAX ON SCROLL ============ */
function initParallax() {
  const blobs = document.querySelectorAll('.bg-blob');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    document.documentElement.style.setProperty('--bg-scroll-y', `${y * 0.08}px`);
    blobs.forEach((blob, i) => {
      const speed = 0.05 + i * 0.03;
      blob.style.transform = `translateY(${y * speed}px)`;
    });
  }, { passive: true });
}

/* ============ FLOATING BACKGROUND ELEMENTS ============ */
function initFloatingElements() {
  if (document.querySelector('.floating-elements')) return;

  const layer = document.createElement('div');
  layer.className = 'floating-elements';
  const symbols = ['</>', '{ }', '01', '&&', '[]', 'API', '=>', '++'];

  symbols.forEach((symbol, index) => {
    const element = document.createElement('span');
    element.className = 'floating-element';
    element.textContent = symbol;
    element.style.left = `${8 + (index * 13) % 86}%`;
    element.style.top = `${12 + (index * 19) % 76}%`;
    element.style.setProperty('--float-duration', `${9 + (index % 4) * 2}s`);
    element.style.setProperty('--float-delay', `${index * -1.3}s`);
    layer.appendChild(element);
  });

  document.body.appendChild(layer);
}

/* ============ INIT ALL ============ */
document.addEventListener('DOMContentLoaded', () => {
  initSplitText();
  initReveals();
  initCounters();
  initSkillBars();
  initTilt();
  initMagnetic();
  initFAQ();
  initMarquee();
  setActiveNav();
  initParallax();
  initFloatingElements();
});

window.addEventListener('load', () => {
  setTimeout(() => {
    initReveals();
    initTilt();
    initMagnetic();
    initSkillBars();
  }, 100);
});

// Expose for dynamic content
window.initReveals = initReveals;
window.initTilt = initTilt;
window.initMagnetic = initMagnetic;
window.initSplitText = initSplitText;
window.initSkillBars = initSkillBars;
window.fireConfetti = fireConfetti;