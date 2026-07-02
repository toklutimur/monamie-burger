import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { defineConfig } from 'vite';

const staticTargets = [
  'menus',
  'placeholder.png',
  'impressum.html',
  'datenschutz.html',
  'sw.js',
  'CNAME',
];

function copyStaticTargets() {
  return {
    name: 'copy-static-targets',
    apply: 'build',
    closeBundle() {
      const root = process.cwd();
      const outDir = resolve(root, 'dist');

      for (const target of staticTargets) {
        const from = resolve(root, target);
        if (!existsSync(from)) continue;

        const to = resolve(outDir, target);
        mkdirSync(dirname(to), { recursive: true });
        cpSync(from, to, { recursive: true });
      }
    },
  };
}

export default defineConfig({
  plugins: [copyStaticTargets()],
});
