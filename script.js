const menuButton = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('#primary-menu');

menuButton?.addEventListener('click', () => {
  const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isExpanded));
  menuButton.setAttribute('aria-label', isExpanded ? 'Open navigation menu' : 'Close navigation menu');
  navMenu?.classList.toggle('is-open', !isExpanded);
});

navMenu?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLAnchorElement && window.matchMedia('(max-width: 700px)').matches) {
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open navigation menu');
    navMenu.classList.remove('is-open');
  }
});
