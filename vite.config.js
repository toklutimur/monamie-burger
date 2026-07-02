import { cpSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const staticPaths = ['menus', 'placeholder.png'];

export default defineConfig({
  plugins: [
    {
      name: 'copy-menu-assets',
      closeBundle() {
        for (const assetPath of staticPaths) {
          const source = resolve(assetPath);
          if (existsSync(source)) {
            cpSync(source, resolve('dist', assetPath), { recursive: true });
          }
        }
      },
    },
  ],
});
