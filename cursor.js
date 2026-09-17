/* ============================================================
   CURSOR — Custom cursor + trail
   ============================================================ */
(function() {
  if (!window.matchMedia('(pointer: fine)').matches) return;

  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;
  let trailX = 0, trailY = 0;

  // Create trail element
  const trail = document.createElement('div');
  trail.className = 'cursor-trail';
  document.body.appendChild(trail);

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  const animate = () => {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;

    trailX += (mouseX - trailX) * 0.08;
    trailY += (mouseY - trailY) * 0.08;
    trail.style.transform = `translate(${trailX}px, ${trailY}px) translate(-50%, -50%)`;

    requestAnimationFrame(animate);
  };
  animate();

  // Hover states
  const hoverTargets = 'a, button, .btn, input, textarea, .chip, .skill-tag, .tech-chip, .filter-btn';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverTargets)) {
      ring.classList.add('hovered');
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverTargets)) {
      ring.classList.remove('hovered');
    }
  });

  // "View" cursor on project cards
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('.project-card, [data-cursor="view"]')) {
      ring.classList.add('viewing');
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest('.project-card, [data-cursor="view"]')) {
      ring.classList.remove('viewing');
    }
  });

  // Hide/show on window leave/enter
  document.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
    trail.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    dot.style.opacity = '1';
    ring.style.opacity = '1';
    trail.style.opacity = '0.5';
  });
})();