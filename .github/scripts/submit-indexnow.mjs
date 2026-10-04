import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';

// Run against the published checkout after GitHub Pages completes, never on build.
const args = process.argv.slice(2);
const root = path.resolve(args.find(arg => !arg.startsWith('--')) || '.');
const origin = 'https://shubham-sahu.me';
const sitemap = await fs.readFile(path.join(root, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
if (!urls.length || urls.some(url => new URL(url).origin !== origin)) throw new Error('Invalid portfolio sitemap');
const files = await fs.readdir(root);
const keyFile = files.find(file => /^[a-f0-9]{32}\.txt$/.test(file));
if (!keyFile) throw new Error('Missing IndexNow verification file');
const key = (await fs.readFile(path.join(root, keyFile), 'utf8')).trim();
if (keyFile !== key + '.txt') throw new Error('IndexNow key does not match filename');
let selected = urls;
if (!args.includes('--all')) {
  const changed = new Set(execFileSync('git', ['diff', '--name-only', 'HEAD^', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim().split('\n'));
  selected = urls.filter(url => changed.has(path.posix.join(new URL(url).pathname.slice(1), 'index.html')));
}
if (!selected.length) { console.log('No changed indexable pages; nothing submitted.'); process.exit(0); }
const payload = { host: new URL(origin).host, key, keyLocation: `${origin}/${keyFile}`, urlList: selected };
if (args.includes('--dry-run')) { console.log(JSON.stringify({ dryRun: true, urlList: selected }, null, 2)); process.exit(0); }
const hash = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
// Guard against notifying engines before this exact page content is actually live.
for (const url of [...selected, payload.keyLocation]) {
  const response = await fetch(url, { signal: AbortSignal.timeout(30000), cache: 'no-store' });
  if (response.status !== 200) throw new Error(`Live page returned ${response.status}: ${url}`);
  const localPath = url === payload.keyLocation ? keyFile : path.posix.join(new URL(url).pathname.slice(1), 'index.html');
  if (hash(Buffer.from(await response.arrayBuffer())) !== hash(await fs.readFile(path.join(root, localPath)))) throw new Error(`Live content differs from deployment: ${url}`);
}
const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(payload), signal: AbortSignal.timeout(30000),
});
if (![200, 202].includes(response.status)) throw new Error(`IndexNow rejected submission: HTTP ${response.status}`);
console.log(`IndexNow received ${selected.length} URLs: HTTP ${response.status}. Receipt does not prove indexing or ranking.`);
