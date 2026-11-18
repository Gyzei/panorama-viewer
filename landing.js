if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  }, { rootMargin: '0px 0px -16px' });

  document.querySelectorAll('[data-reveal]').forEach((element) => {
    revealObserver.observe(element);
  });
  document.documentElement.classList.add('reveal-ready');
}
