const fs = require('fs');
const Sitemap = require('sitemap');
const { createServer } = require('http');

const appRoutes = [
  '/',
  '/accueil',
  '/services',
  '/realisation',
  '/blog',
  '/contacter',
  '/mentionLegales',
  '/profilGit',
];

const sitemap = Sitemap.createSitemap({
  hostname: 'https://john-doe-cv.vercel.app/',
  urls: appRoutes.map(route => ({ url: route, changefreq: 'daily', priority: 0.7 })),
});

fs.writeFileSync('./public/sitemap.xml', sitemap.toString());

const server = createServer((req, res) => {
  res.setHeader('Content-Type', 'application/xml');
  res.end(sitemap.toString());
});

const port = 3000;
server.listen(port, () => {
  console.log(`Sitemap server running at http://localhost:${port}`);
});
