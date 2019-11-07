const initNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar-lewagon');
  window.addEventListener('scroll', () => {
    if(window.scrollY >= window.innerHeight) {
      navbar.classList.add('navbar-lewagon-white');
    } else {
      navbar.classList.remove('navbar-lewagon-white');
    }
  });
}

export { initNavbarOnScroll }

