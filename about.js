window.onload = () => {
  const header2 = document.querySelector('.header-2');
  const hamburger = document.getElementById('hamburger');

  hamburger.onclick = () => {
    header2.classList.remove('desktop');
  };

  const close = document.getElementById('close');
  close.onclick = () => {
    header2.classList.add('desktop');
  };

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
