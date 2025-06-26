export default {
  input: 'src/astro.js',
  output: {
    file: 'dist/highlightjs-astro.js',
    exports: 'named',
    format: 'esm'
  },
  external: 'highlightjs'
};