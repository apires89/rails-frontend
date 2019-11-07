import Typed from 'typed.js'

const loadBannerText = () => {
  new Typed('#banner-text', {
  strings: ["Change your life", "Learn to Code"],
  typeSpeed: 50,
  loop: true
});
}

export { loadBannerText }
