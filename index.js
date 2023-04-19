const data = [
  {
    id: 1,
    name: 'Jock Toppas',
    image: 'img/person1.png',
    job_title: 'Jock Professor of Entrepreneurial Legal Studies at Harvard Law School',
    biography: 'Toppas studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
  {
    id: 2,
    name: 'Jone Dannet',
    image: 'img/person2.png',
    job_title: '',
    biography: 'As the main venue for new media art production in California, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    id: 3,
    name: 'Latour Brigg',
    image: 'img/person3.png',
    job_title: 'Assistant Manager',
    biography: 'Brigg Latour worked in several jobs that included a try as a machinist,[10] several other jobs,[11] and then back to work as a machinist.',
  },
  {
    id: 4,
    name: 'Nolan Crosoer',
    image: 'img/person4.png',
    job_title: 'Executive Design',
    biography: 'Nolan Crosoer worked in several jobs that included a try as a machinist,[10] several other jobs,[11] and then back to work as a machinist.',
  },
  {
    id: 5,
    name: 'Amil Fielding',
    image: 'img/person5.png',
    job_title: 'Social Worker',
    biography: 'Amil Fielding worked in several jobs that included a try as a machinist,[10] several other jobs,[11] and then back to work as a machinist.',
  },
  {
    id: 6,
    name: 'Lark Tom',
    image: 'img/person6.png',
    job_title: 'Web Developper ',
    biography: 'Lark Tom worked in several jobs that included a try as a machinist,[10] several other jobs,[11] and then back to work as a machinist.',
  },
];

const speaker = (data) => `<div class="speaker anim">
    <img src=${data.image} alt="">
    <div class="personal-info">
      <h3>${data.name}</h3>
      <h4>${data.job_title}</h4>
      <hr>
      <p>${data.biography}</p>
    </div>
  </div>`;

window.onload = () => {
  const header2 = document.querySelector('.header-2');
  const hamburger = document.getElementById('hamburger');

  hamburger.onclick = () => {
    // menu.classList.remove('menu-hide');
    header2.classList.remove('desktop');
  };

  const close = document.getElementById('close');
  close.onclick = () => {
    header2.classList.add('desktop');
  };

  const speakers = document.querySelector('.speakers');
  const speakersArr = data.map((d) => speaker(d));

  if (window.screen.width > 768) speakers.innerHTML = speakersArr.join('');
  else speakers.innerHTML = speakersArr.filter((_, i) => i < 2).join('');

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
