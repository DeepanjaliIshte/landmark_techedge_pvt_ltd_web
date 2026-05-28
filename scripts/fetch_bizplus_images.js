const fs = require('fs');
const path = require('path');
const url = 'https://landmarksol.com/bizpluscrm.html';

async function fetchText(u){
  const res = await fetch(u);
  return await res.text();
}

async function download(url, dest){
  const res = await fetch(url);
  if(!res.ok) throw new Error(`Failed ${res.status} ${url}`);
  await fs.promises.mkdir(path.dirname(dest), { recursive: true });
  const ab = await res.arrayBuffer();
  await fs.promises.writeFile(dest, Buffer.from(ab));
}

(async ()=>{
  try{
    const html = await fetchText(url);
    const regex = /<img[^>]+src=["']([^"']+)["']/g;
    const urls = new Set();
    let m;
    while((m=regex.exec(html))){
      urls.add(m[1]);
    }
    const arr = Array.from(urls);
    console.log('Found', arr.length, 'image URLs');
    for(const u of arr){
      let full = u;
      if(full.startsWith('//')) full = 'https:' + full;
      else if(full.startsWith('/')) full = 'https://landmarksol.com' + full;
      else if(!full.startsWith('http')) full = 'https://landmarksol.com/' + full.replace(/^\/+/, '');
      try{
        const name = path.basename(new URL(full).pathname) || 'image';
        const out = path.join('public','assets','img','Snaps', name);
        console.log('Downloading', full, '->', out);
        await download(full, out);
        console.log('Saved', out);
      }catch(err){
        console.error('Failed to download', u, err.message);
      }
    }
    console.log('Done.');
  }catch(err){
    console.error(err);
    process.exit(1);
  }
})();
