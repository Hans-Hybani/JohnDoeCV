const Sitemap = require('sitemap');

const sitemap = Sitemap.createSitemap({
  hostname: 'https://votre-site.com',
  urls: [
    { url: '/', changefreq: 'daily', priority: 0.7 },
    { url: '/page1', changefreq: 'weekly', priority: 0.5 },
    
  ],
});

sitemap.toXML((err, xml) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(xml);
});
