const { FuseBox, TypeScriptHelpers, Sparky, CSSPlugin, SassPlugin } = require('fuse-box');

const fuse = FuseBox.init({
  homeDir: './src/',
  output: './dist/',
  tsConfig: './tsconfig.json',
  plugins: [
    TypeScriptHelpers(),
    [SassPlugin(), CSSPlugin()],
  ]
});

fuse
  .bundle('dist/index.js')
  .instructions('> index.ts')
  .watch();

fuse.dev({
  root: 'dist/',
  port: '4444',
  hmr: false,
});

fuse.run();

Sparky.task('default', () => Sparky.watch('index.html', {base: './src/'}).dest('./dist/'));