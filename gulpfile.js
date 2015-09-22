var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    ngAnnotate = require('gulp-ng-annotate'),
    replace = require('gulp-replace');

gulp.task('js', function () {
  gulp.src([
        'app/bower_components/angular/angular.js',
        'app/bower_components/angular-route/angular-route.js',
        'app/bower_components/angular-bootstrap/ui-bootstrap.js',
        'app/app.js',
        'app/ad/*.js',
        'app/partial/*.js'
     ])
    .pipe(concat('app.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest('dist/'))
});

gulp.task('css', function () {
  gulp.src([
        'app/bower_components/html5-boilerplate/dist/css/normalize.css',
        'app/bower_components/html5-boilerplate/dist/css/main.css',
        'app/bower_components/bootstrap/dist/css/bootstrap.css',
        'app/bower_components/bootstrap/dist/css/bootstrap-theme.css',
        'app/app.css'
     ])
    .pipe(concat('app.css'))
    .pipe(replace('/*!', '/*'))
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/'))
});

gulp.task('html', function() {
    gulp.src('app/ad/*.html').pipe(gulp.dest('dist/ad/'));
    gulp.src('app/partial/*.html').pipe(gulp.dest('dist/partial/'));
});

gulp.task('dist', ['js','css','html']);