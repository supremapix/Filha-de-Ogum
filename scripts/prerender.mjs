import { build } from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
const root = process.cwd();
const temporary = fs.mkdtempSync(path.join(root, 'node_modules', '.prerender-'));
try {
  const entry = path.join(temporary, 'entry.cjs');
  await build({ entryPoints: ['scripts/prerender-entry.tsx'], bundle: true, platform: 'node', format: 'cjs', packages: 'external', outfile: entry });
  const { renderPage } = createRequire(import.meta.url)(entry);
  const template = fs.readFileSync(path.join(root, 'dist/index.html'), 'utf8');
  fs.writeFileSync(path.join(root, 'dist/spa.html'), template);
  for (const route of ['/', '/links', '/sitemap']) {
    const rendered = renderPage(route);
    const html = template.replace('<!-- SEO_PLACEHOLDER -->', rendered.head).replace('<div id="root"></div>', () => `<div id="root">${rendered.body}</div>`);
    const directory = route === '/' ? 'dist' : `dist${route}`;
    fs.mkdirSync(directory, { recursive: true });
    fs.writeFileSync(`${directory}/index.html`, html);
    console.log(`Prerendered ${route}: visible content and metadata in HTML`);
  }
} finally { fs.rmSync(temporary, { recursive: true, force: true }); }
