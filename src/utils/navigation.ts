// An array of links for navigation bar
const navBarLinks = [
  { name: 'Ana Sayfa', url: '/' },
  { name: 'Ürünler', url: '/products' },
  { name: 'Hizmetler', url: '/services' },
  { name: 'Blog', url: '/blog' },
  { name: 'İletişim', url: '/contact' },
];
// An array of links for footer
const footerLinks = [
  {
    section: 'Ekosistem',
    links: [
      { name: 'Dokümantasyon', url: '/welcome-to-docs/' },
      { name: 'Araçlar ve Ekipmanlar', url: '/products' },
      { name: 'İnşaat Hizmetleri', url: '/services' },
    ],
  },
  {
    section: 'Şirket',
    links: [
      { name: 'Hakkımızda', url: '#' },
      { name: 'Blog', url: '/blog' },
      { name: 'Kariyer', url: '#' },
      { name: 'Müşteriler', url: '#' },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: 'https://www.facebook.com/',
  x: 'https://twitter.com/',
  github: 'https://github.com/mearashadowfax/ScrewFast',
  google: 'https://www.google.com/',
  slack: 'https://slack.com/',
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
