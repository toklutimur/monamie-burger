import { cp, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');

const staticPaths = [
  'menus',
  'placeholder.png',
  'manifest.json',
  'sw.js',
  'CNAME',
  'impressum.html',
  'datenschutz.html',
];

await mkdir(dist, { recursive: true });

for (const item of staticPaths) {
  await cp(join(root, item), join(dist, item), {
    recursive: true,
    force: true,
  });
}
