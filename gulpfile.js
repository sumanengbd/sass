const gulp 	= require('gulp'),
	sass	= require('gulp-sass'),
	//sourceMaps = require('gulp-sourcemaps'),
	autoprefixer = require('gulp-autoprefixer'),
	cssmin = require('gulp-cssmin');
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),

	// js required 
	uglify = require('gulp-uglify');

	// Task styles
	gulp.task('sass', () => {
		return gulp.src(['src/sass/style.scss'])
		//.pipe(sourceMaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		// .pipe(cssmin())
		// .pipe(sourceMaps.write())
		.pipe(gulp.dest('./'))
	});

	// Task styles
	gulp.task('css', () => {
		return gulp.src(['./src/css/*.css'])
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css'))
	});

	gulp.task('js', function() {
		return gulp.src([
			'./node_modules/jquery/dist/jquery.min.js',
			'./src/js/*.js'
		])
		.pipe(concat('plugins.js'))
		.pipe(gulp.dest('./js'))
		.pipe(rename('plugins.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./js'))
	})

	// Task watch
	gulp.task('watch', () => {
		gulp.watch('./src/sass/**/*.scss', ['sass']);
		gulp.watch('./src/js/**/*.js', ['js']);
	});

	// Task default
	gulp.task('default', ['sass', ['css'], 'js']);