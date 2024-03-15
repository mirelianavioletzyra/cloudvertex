let mix = require('laravel-mix');
let path = require('path');

mix.setPublicPath(path.resolve('./'));

mix.js('resources/js/app.js', 'js');

mix.postCss("resources/css/app.css", "css");

mix.postCss("resources/css/editor-style.css", "./");

mix.options({
    postCss: [
        require('postcss-nested-ancestors'),
        require('postcss-nested'),
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
    ]
});


mix.browserSync({
    proxy: 'http://your-website.test',
    host: 'your-website.test',
    open: 'external',
    port: 8000,
    files: [
        'cloudvertex/**/*.php',
        'blocks/lazyblock-services/block.php', 
        'public/js/**/*.js', 
        'public/css/**/*.css'
    ]
});

const chokidar = require('chokidar');
chokidar.watch('./blocks/lazyblock-services/block.php').on('all', (event, path) => {
  console.log(event, path);
});


mix.version();