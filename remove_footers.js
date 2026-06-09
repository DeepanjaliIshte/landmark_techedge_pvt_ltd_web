const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') && !fullPath.includes('SiteFooter.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const footerRegex = /<footer className="footer">[\s\S]*?<\/footer>/;
      if (footerRegex.test(content)) {
        console.log(`Removing footer from ${fullPath}`);
        content = content.replace(footerRegex, '');
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}

processDir(path.join(__dirname, 'app'));
