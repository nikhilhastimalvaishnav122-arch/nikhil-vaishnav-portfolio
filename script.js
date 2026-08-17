const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('#nav');
const topBtn = document.querySelector('#topBtn');
const links = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section[id]');

menuBtn.addEventListener('click', () => nav.classList.toggle('open'));

links.forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

window.addEventListener('scroll', () => {
  topBtn.classList.toggle('show', window.scrollY > 500);

  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 180) current = section.id;
  });
  links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
});

topBtn.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));
document.querySelector('#year').textContent = new Date().getFullYear();
