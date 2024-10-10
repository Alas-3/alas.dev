const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

const sitemapStream = new SitemapStream({ hostname: 'https://alas-dev.vercel.app' });

// Add URLs to the sitemap
sitemapStream.write({ url: '/', changefreq: 'hourly', priority: 1.0, lastmod: new Date().toISOString() });
sitemapStream.write({ url: '/about', changefreq: 'hourly', priority: 0.8, lastmod: new Date().toISOString() });
sitemapStream.write({ url: '/projects', changefreq: 'hourly', priority: 0.8, lastmod: new Date().toISOString() });
sitemapStream.end();

// Write to sitemap.xml file
streamToPromise(sitemapStream).then((data) => {
    fs.writeFileSync('./public/sitemap.xml', data.toString());
    console.log('Sitemap generated successfully!');
}).catch((error) => {
    console.error('Error generating sitemap:', error);
});
