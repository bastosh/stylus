var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	typographic = require('typographic'),
	nib = require('nib'),
	rupture = require('rupture'),
	source = './styl/',
	dest = 'css';

gulp.task('stylus', function () {
    return gulp.src(source+'main.styl')
	.pipe(plugins.plumber())
        .pipe(plugins.stylus({
            use: [typographic(), nib(), rupture()]
        }))
        .pipe(plugins.cssbeautify({indent: '  '}))
        .pipe(plugins.autoprefixer())
        .pipe(gulp.dest(dest))
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(plugins.cssnano())
        .pipe(gulp.dest(dest));
});

gulp.task('watch', function () {
	gulp.watch(source+'*.styl', ['stylus']);
});

gulp.task('default', ['watch']);
