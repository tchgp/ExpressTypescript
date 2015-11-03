var gulp = require('gulp'), 
    ts = require('gulp-typescript'),
    compass = require( 'gulp-for-compass' );

gulp.task('default', function () {
    console.log('Доступные модули:\n' + 
                '- "build"\n' +
                '- "compass"\n' +
                '- "tsc:amd"\n' +
				'- "tsc:commonjs"\n' +
                '- "watch"\n');
});

gulp.task('tsc:commonjs', function () {
    console.log('Compiling typescript');
    return gulp.src(['src/routes/**/*.ts'])
        .pipe(ts({module: 'commonjs'}))
        .js.pipe(gulp.dest('dist/routes/'))
});

gulp.task('tsc:commonjs:app', function () {
    console.log('Compiling typescript');
    return gulp.src(['src/app.ts'])
        .pipe(ts({module: 'commonjs'}))
        .js.pipe(gulp.dest('dist/'))
});

gulp.task('tsc:amd', function () {
    console.log('Compiling typescript');
    return gulp.src(['src/public/javascript/**/*.ts'])
        .pipe(ts({module: 'amd'}))
        .js.pipe(gulp.dest('dist/public/javascript/'))
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

gulp.task('build', function(){
    // Сделайте что - нибудь...
});

gulp.task('watch', function(){
  // Наблюдение за .scss файлами
  gulp.watch('sass/**/*.scss', ['compass']);
  
  // Наблюдение за .ts файлами
  gulp.watch('src/public/routes/**/*.ts', ['tsc:commonjs']);
  
  // Наблюдение за .ts файлами
  gulp.watch('src/public/app.ts', ['tsc:commonjs:app']);
  
  // Наблюдение за .ts файлами
  gulp.watch('src/public/javascript/**/*.ts', ['tsc:amd']);  
});