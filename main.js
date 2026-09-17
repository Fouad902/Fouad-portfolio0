/* ============================================================
   MAIN — Animations & Interactions
   ============================================================ */

/* ---------- PRELOADER ---------- */
window.addEventListener('load', () => {
  const pre = document.getElementById('preloader');
  if (pre) setTimeout(() => pre.classList.add('hidden'), 800);
});

/* ---------- THEME ---------- */
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

/* ---------- CUSTOM CURSOR ---------- */
const cursorDot = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');
let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

if (cursorDot && cursorRing && window.matchMedia('(pointer: fine)').matches) {
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX; mouseY = e.clientY;
    cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  const animateRing = () => {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    cursorRing.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animateRing);
  };
  animateRing();

  document.querySelectorAll('a, button, .tilt, input, textarea').forEach(el => {
    el.addEventListener('mouseenter', () => cursorRing.classList.add('hovered'));
    el.addEventListener('mouseleave', () => cursorRing.classList.remove('hovered'));
  });
}

/* ---------- SCROLL PROGRESS ---------- */
const progressBar = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
  const h = document.documentElement.scrollHeight - window.innerHeight;
  const p = (window.scrollY / h) * 100;
  if (progressBar) progressBar.style.width = p + '%';
});

/* ---------- NAVBAR SCROLL ---------- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 20);
});

/* ---------- MOBILE MENU ---------- */
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
menuToggle?.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  mobileMenu.classList.toggle('open');
});
mobileMenu?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    mobileMenu.classList.remove('open');
  });
});

/* ---------- TYPING EFFECT ---------- */
const typingEl = document.getElementById('typingText');
if (typingEl) {
  const words = ['scalable APIs.', 'production systems.', 'clean architecture.', 'real impact.'];
  let wordIdx = 0, charIdx = 0, deleting = false;

  const type = () => {
    const word = words[wordIdx];
    if (!deleting) {
      typingEl.textContent = word.slice(0, ++charIdx);
      if (charIdx === word.length) {
        deleting = true;
        setTimeout(type, 1800);
        return;
      }
      setTimeout(type, 65);
    } else {
      typingEl.textContent = word.slice(0, --charIdx);
      if (charIdx === 0) {
        deleting = false;
        wordIdx = (wordIdx + 1) % words.length;
        setTimeout(type, 350);
        return;
      }
      setTimeout(type, 30);
    }
  };
  setTimeout(type, 900);
}

/* ---------- SCROLL REVEAL ---------- */
function initReveals() {
  const els = document.querySelectorAll('[data-reveal]:not(.revealed)');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, (parseFloat(entry.target.style.getPropertyValue('--delay')) || 0) * 1000);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  els.forEach(el => obs.observe(el));
}
window.initReveals = initReveals;

/* ---------- NUMBER COUNTER ---------- */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = +el.dataset.count;
        const suffix = el.dataset.suffix || '';
        let current = 0;
        const step = target / 45;
        const update = () => {
          current += step;
          if (current >= target) {
            el.textContent = target + suffix;
          } else {
            el.textContent = Math.floor(current) + suffix;
            requestAnimationFrame(update);
          }
        };
        update();
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => obs.observe(c));
}

/* ---------- TILT CARDS ---------- */
function initTilt() {
  document.querySelectorAll('.tilt:not(.tilt-ready)').forEach(card => {
    card.classList.add('tilt-ready');
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const cx = r.width / 2;
      const cy = r.height / 2;
      const rx = ((y - cy) / cy) * -6;
      const ry = ((x - cx) / cx) * 6;
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}
window.initTilt = initTilt;

/* ---------- MAGNETIC BUTTONS ---------- */
document.querySelectorAll('.magnetic').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const r = btn.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
  });
});

/* ---------- SMOOTH SCROLL ---------- */
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

/* ---------- PARTICLES ---------- */
const canvas = document.getElementById('particles');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let particles = [];
  let w, h;

  const resize = () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
  resize();
  window.addEventListener('resize', resize);

  const count = Math.min(70, Math.floor(window.innerWidth / 22));
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.6 + 0.4,
    });
  }

  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    const accent = getComputedStyle(document.documentElement)
      .getPropertyValue('--accent').trim() || '#6366f1';

    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = accent + '55';
      ctx.fill();
    });

    // lines between close particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = accent + Math.floor((1 - d / 120) * 40).toString(16).padStart(2, '0');
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  };
  draw();
}

/* ---------- CONTACT FORM ---------- */
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
    
    const res = await fetch('https://formspree.io/f/meaoqpqz', {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' },
    });

    if (res.ok) {
      status.textContent = '✓ Message sent successfully. I\'ll get back to you soon!';
      status.classList.add('success');
      form.reset();
    } else {
      throw new Error('Failed');
    }
  } catch (err) {
    status.textContent = '✗ Something went wrong. Please email me directly at fouadkadrii896@gmail.com';
    status.classList.add('error');
  } finally {
    btnText.hidden = false;
    btnLoading.hidden = true;
    btn.disabled = false;
  }
});

/* ---------- YEAR ---------- */
document.querySelectorAll('#year').forEach(el => {
  el.textContent = new Date().getFullYear();
});

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initReveals();
  initTilt();
  initCounters();
});

// Re-init after dynamic content render
window.addEventListener('load', () => {
  setTimeout(() => { initReveals(); initTilt(); }, 100);
});