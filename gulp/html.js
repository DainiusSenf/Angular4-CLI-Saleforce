module.exports = function(gulp, config) {
	'use strict';

	const template = require('gulp-template'),
		rename = require('gulp-rename');

	let vfProdTemplate = {
		baseUrl: '/apex/' + config.visualforce.page,
		local: false,
		controller: config.visualforce.controller,
		app_directory: `{!URLFOR($Resource.${config.resources.app_resource_name})}/`
	};

	gulp.task('html:prod', () => {
		return gulp.src(['dist/*.html'])
			.pipe(gulp.dest('build'));
	});

	gulp.task('visualforce:prod', () => {
		return gulp.src(`visualforce_page_template/${config.visualforce.template}`)
		.pipe(rename((path) => {
			path.basename = config.visualforce.page;
			path.extname = '.page';
		}))
		.pipe(template(vfProdTemplate))
		.pipe(gulp.dest('VFpage'));
	});

	gulp.task('watch:html', () => {
		gulp.watch('src/' + config.visualforce.template, gulp.series('visualforce:dev'));
	});
}
