const menuButton = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav');
if (menuButton && menu) {
  menuButton.hidden = false;
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('is-open', open);
    menuButton.textContent = open ? 'Close' : 'Menu';
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) {
      menuButton.click();
      menuButton.focus();
    }
  });
}

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  const reason = new URLSearchParams(location.search).get('reason');
  if (reason === 'lkco') contactForm.elements.reason.value = 'LK&Co inquiry';
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const fields = new FormData(contactForm);
    const subject = `${fields.get('reason') || 'Website inquiry'} — ${fields.get('name')}`;
    const body = `Name: ${fields.get('name')}\nEmail: ${fields.get('email')}\n\n${fields.get('message')}`;
    location.href = `mailto:lauralynchcx@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    document.querySelector('#form-status').textContent = 'Your email app will open a draft. Review it and press Send there. If it does not open, email lauralynchcx@gmail.com directly.';
  });
}
