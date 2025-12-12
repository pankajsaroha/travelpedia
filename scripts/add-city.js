#!/usr/bin/env node
// usage: node scripts/add-city.js slug "City Name" "State Name"
import fs from 'fs';
import path from 'path';
const [,, slug, title, state] = process.argv;
if (!slug || !title) {
  console.error('Usage: node scripts/add-city.js slug "City Name" "State Name"');
  process.exit(1);
}
const contentDir = path.resolve('src/content/cities');
const file = path.join(contentDir, `${slug}.md`);
const template = `---\ntitle: "${title}"\nslug: "${slug}"\nstate: "${state || ''}"\nexcerpt: ""\nhistory: ""\nbestPlaces: []\nhiddenPlaces: []\ndistances:\n  airport: ""\n  railway: ""\n  bus: ""\nhowToReach: ""\nbestHotels: []\nimage: "/images/placeholder-1.jpg"\n---\n\nWrite content here in Markdown.\n`;
fs.writeFileSync(file, template);
console.log('Created', file);
