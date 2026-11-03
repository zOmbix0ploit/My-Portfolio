import { build } from 'esbuild';
import { mkdirSync } from 'node:fs';

mkdirSync('Asset/dist', { recursive: true });

await build({
  entryPoints: ['src/app.jsx'],
  bundle: true,
  minify: true,
  sourcemap: true,
  outfile: 'Asset/dist/app.js',
  loader: { '.jsx': 'jsx', '.json': 'json' },
  jsx: 'automatic',
  target: ['es2020'],
  define: { 'process.env.NODE_ENV': '"production"' }
});

console.log('Portfolio built: index.html + Asset/dist/app.js + Asset/dist/app.css');
