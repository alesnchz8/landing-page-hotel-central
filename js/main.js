/* ********************************************************************************* */
/* ******************************* SCROLL TOP BUTTON ******************************* */
/* ********************************************************************************* */
const $scrollTopBtn = document.getElementById('scroll-top-btn');

window.addEventListener('scroll', (e) => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  scrollTop > 600 ? $scrollTopBtn.classList.remove('hidden') : $scrollTopBtn.classList.add('hidden');
});

$scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ********************************************************************************* */
/* ********************************* HAMBURGER MENU ******************************** */
/* ********************************************************************************* */
const $buttonMenu = document.getElementById('button-menu');
const $nav = document.getElementById('nav');

$buttonMenu.addEventListener('click', () => {
  $buttonMenu.classList.toggle('is-active');
  $nav.classList.toggle('is-active');
});