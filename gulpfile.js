const gulp 	= require('gulp'),
	sass	= require('gulp-sass'),
	sourceMaps = require('gulp-sourcemaps'),
	autoprefixer = require('gulp-autoprefixer'),
	//cssMin = require('gulp-cssmin');

	// js required 
	uglify = require('gulp-uglify');

	// Task styles
	gulp.task('style', () => {
		return gulp.src(['sass/style.scss'])
		//.pipe(sourceMaps.init())
		.pipe(sass().on('error', sass.logError))
		//.pipe(cssMin())
		.pipe(autoprefixer())
		.pipe(sourceMaps.write())
		.pipe(gulp.dest('./'))
	});

	gulp.task('js', function() {
		return gulp.src([
			'./node_modules/jquery/dist/jquery.min.js',
			'./js/scripts.js'
		])
		.pipe(uglify())
		.pipe(gulp.dest('./js'))
	})

	// Task watch
	gulp.task('watch', () => {
		gulp.watch('./sass/**/*.scss', ['style']);
		gulp.watch('./js/**/*.js', ['js']);
	});

	// Task default
	gulp.task('default', ['style', 'js']);