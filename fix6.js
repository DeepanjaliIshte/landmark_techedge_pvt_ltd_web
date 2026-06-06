const fs = require('fs');
const path = require('path');

// Fix page.tsx
const pageFile = path.join(__dirname, 'app/page.tsx');
let pageContent = fs.readFileSync(pageFile, 'utf8');

pageContent = pageContent.replace(/Since 2014/g, 'Since 2013');
pageContent = pageContent.replace(/Since 2003/g, 'Since 2013');

fs.writeFileSync(pageFile, pageContent, 'utf8');

// Fix about/page.tsx
const aboutFile = path.join(__dirname, 'app/about/page.tsx');
let aboutContent = fs.readFileSync(aboutFile, 'utf8');

aboutContent = aboutContent.replace(/Established in 2003/g, 'Established in 2013');
aboutContent = aboutContent.replace(/Since 2014/g, 'Since 2013');
aboutContent = aboutContent.replace(/"2014"/g, '"2013"');
aboutContent = aboutContent.replace(/"20\+"/g, '"13+"');

fs.writeFileSync(aboutFile, aboutContent, 'utf8');

console.log('Fixed dates in page.tsx and about/page.tsx');
