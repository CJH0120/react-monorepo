import esbuild from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';

const commonOptions = {
  entryPoints: ['src/index.ts'],
  platform: 'node',
  bundle: true,
  minify: true,
  outdir: 'dist',
};

esbuild
  .build({
    ...commonOptions,
    format: 'esm',
    outExtension: { '.js': '.mjs' },
    plugins: [sassPlugin()],
  })
  .catch(() => process.exit(1));

esbuild
  .build({
    ...commonOptions,
    format: 'cjs',
    outExtension: { '.js': '.cjs' },
    plugins: [sassPlugin()],
  })
  .catch(() => process.exit(1));
