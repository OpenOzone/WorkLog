/// <reference types="node" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { crx, ManifestV3Export } from '@crxjs/vite-plugin';
import path from 'path';

const manifest = {
  manifest_version: 3,
  name: 'OpenOzone WorkLog',
  version: '1.0.0',
  description: 'A Chrome extension to log time spent on work.',
  permissions: ['sidePanel'],
  action: {
    default_icon: {
      '16': 'icons/icon-16.png',
      '32': 'icons/icon-32.png',
      '48': 'icons/icon-48.png',
      '128': 'icons/icon-128.png',
    },
  },
  side_panel: {
    default_path: 'src/sidepanel/index.html',
  },
  options_page: 'src/options/index.html',
  background: {
    service_worker: 'src/background/index.ts',
    type: 'module',
  },
  content_scripts: [
    {
      matches: ['<all_urls>'],
      js: ['src/content/index.ts'],
    },
  ],
  icons: {
    '16': 'icons/icon-16.png',
    '32': 'icons/icon-32.png',
    '48': 'icons/icon-48.png',
    '128': 'icons/icon-128.png',
  },
} as ManifestV3Export;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        options: 'src/options/index.html',
        sidepanel: 'src/sidepanel/index.html',
      },
    },
  },
  publicDir: 'public',
});
