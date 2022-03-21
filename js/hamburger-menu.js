const $buttonMenu = document.getElementById('button-menu');
const $nav = document.getElementById('nav');

$buttonMenu.addEventListener('click', () => {
  $buttonMenu.classList.toggle('is-active'), $nav.classList.toggle('is-active');
});

$buttonMenu.addEventListener('click', (t) => {
  'nav' === t.target.id && (navWrapper.classList.remove('is-active'), toggleButton.classList.remove('is-active'));
});