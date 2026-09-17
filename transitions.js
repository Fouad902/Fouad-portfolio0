/* ============================================================
   TRANSITIONS — Page enter animations
   ============================================================ */
(function() {
  window.addEventListener('DOMContentLoaded', () => {
    const trans = document.querySelector('.page-transition');
    if (trans) {
      trans.classList.add('entering');
      setTimeout(() => trans.classList.remove('entering'), 700);
    }
  });
})();