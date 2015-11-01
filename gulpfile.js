var gulp = require('gulp'), 
    ts = require('gulp-typescript'),
    compass = require( 'gulp-for-compass' );

gulp.task('default', function () {
    console.log('Доступные модули:\n' + 
                '- "compass"\n' +
                '- "typescript"\n' +
                '- "watch"\n');
});

gulp.task('tsc:commonjs', function () {
    console.log('Compiling typescript');
    return gulp.src(['src/public/routes/**/*.ts'])
        .pipe(ts({module: 'commonjs'}))
        .js.pipe(gulp.dest('dist/public/routes/**/*.ts'))
});

gulp.task('tsc:amd', function () {
    console.log('Compiling typescript');
    return gulp.src(['src/public/javascript/**/*.ts'])
        .pipe(ts({module: 'commonjs'}))
        .js.pipe(gulp.dest('dist/public/javascript/**/*.ts'))
});

gulp.task( 'compass', function(){
    console.log('Compiling sass');
    gulp.src('src/public/stylesheets/**/*.scss')
        .pipe(compass({
            sassDir: 'src/public/stylesheets',
            cssDir: 'dist/public/stylesheets',
            force: true
        }));
});

gulp.task('watch', function(){
  // Наблюдение за .scss файлами
  gulp.watch('sass/**/*.scss', ['compass']);
  
  // Наблюдение за .ts файлами
  gulp.watch('src/public/routes/**/*.ts', ['tsd:commonjs']);
  
  // Наблюдение за .ts файлами
  gulp.watch('src/public/javascript/**/*.ts', ['tsd:amd']); 
});