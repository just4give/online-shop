module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'client/css/style.css' : 'sass/style.scss'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		},
		forever: {
			server1: {
				options: {
					index: 'bin/www',
					logDir: 'logs',
					logFile:'log.out',
					errFile:'error.out'
				}
			}


		},
		concurrent: {
			options: {
				logConcurrentOutput: true
			},
			tasks: ['forever:server1:start', 'watch']
		}

	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-forever');
	grunt.registerTask('dev',['concurrent']);
}