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

const faqSection = document.querySelector('.faq');

faqSection?.addEventListener('click', (event) => {
  const questionButton = event.target instanceof Element
    ? event.target.closest('.faq-question')
    : null;

  if (!(questionButton instanceof HTMLButtonElement)) return;

  const shouldExpand = questionButton.getAttribute('aria-expanded') !== 'true';

  faqSection.querySelectorAll('.faq-question').forEach((faqButton) => {
    faqButton.setAttribute('aria-expanded', 'false');
    const answer = document.getElementById(faqButton.getAttribute('aria-controls'));
    if (answer) answer.hidden = true;
  });

  if (shouldExpand) {
    questionButton.setAttribute('aria-expanded', 'true');
    const answer = document.getElementById(questionButton.getAttribute('aria-controls'));
    if (answer) answer.hidden = false;
  }
});
