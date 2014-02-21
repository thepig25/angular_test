module.exports = function(grunt) {
	grunt.initConfig({
		sass: {		// Task
			dist: {		// Target
				files: {	// Dictionary of files
						'public/css/styles.css': 'src/sass/styles.scss'	// 'destination': 'source'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('build', ['sass']);
};