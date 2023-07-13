const { resolve } = require('path');

const { build } = require('esbuild');
const fastGlob = require('fast-glob');

const BASE_PATH = resolve(__dirname, '.');

build({
  platform: 'node',
  outdir: 'dist',
  format: 'cjs',
  target: 'es2020',
  tsconfig: 'tsconfig.json',
  absWorkingDir: BASE_PATH,
  minify: true,
  keepNames: true,
  sourcemap: true,
  loader: {
    '.proto': 'copy',
  },
  entryPoints: fastGlob.sync('src/**/*'),
});
