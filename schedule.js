window.onload = () => {
  const contents = document.querySelectorAll('.anim');
  const options = {
    root: null,
    threshold: 0,
    rootMargin: '-150px',
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-animation');
        observer.unobserve(entry.target);
        return;
      }
      entry.target.classList.remove('section-animation');
    });
  }, options);

  contents.forEach((content) => {
    observer.observe(content);
  });
};
