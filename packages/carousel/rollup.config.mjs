import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs',
      format: 'cjs',
    },
    {
      file: 'dist/index.mjs',
      format: 'esm',
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    postcss({
      modules: true,
      extract: false,
    }),
    typescript({}),
  ],
  external: ['react', 'react/jsx-runtime', 'classnames/bind'],
};
