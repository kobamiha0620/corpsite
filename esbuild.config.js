const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/js/main.js'], 
  bundle: true,                     // バンドルするかどうか
  outdir: 'dist/assets/js',                // 出力ディレクトリ
  sourcemap: false,                  // ソースマップを生成するかどうか
  minify: true,
}).catch(() => process.exit(1));