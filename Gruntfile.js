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
		ngtemplates:  {
			app:        {
				cwd:      'client',
				src:      'modules/**/*.html',
				dest:     'build/app.templates.js',
				options:    {
					htmlmin:  { collapseWhitespace: true, collapseBooleanAttributes: true },
					module:'profile'
				}
			}
		},

		uglify: {
			options: {
				mangle: false,
				compress: {
					drop_console: true
				}
			},
			my_target: {
				files: {
					'client/js/client.app.min.js': ['client/js/app.js', 'client/modules/**/*.js']
				}
			}
		},
		concat:   {
			app:    {
				src:  ['client/js/client.app.min.js',  '<%= ngtemplates.app.dest %>' ],
				dest:  'client/js/client.app.min.js' ,
			}
		},
		forever: {
			dev: {
				options: {
					index: 'bin/profile',
					logDir: 'logs',
					logFile:'log.out',
					errFile:'error.out'
				}
			},

			prod: {
				options: {
					index: 'bin/profile',
					logDir: 'logs',
					logDir: 'logs',
					logFile:'log.out',
					errFile:'error.out'
				}
			}
		},
		env : {

			options : {



			},

			dev: {

				NODE_ENV : 'DEVELOPMENT'

			},

			prod : {

				NODE_ENV : 'PRODUCTION'

			}

		},
		preprocess : {

			dev : {

				src : 'build/index-temp.ejs',
				dest : 'server/views/index.ejs'

			},

			prod : {

				src : 'build/index-temp.ejs',
				dest : 'server/views/index.ejs'


			}

		},
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'client/css',
					src: ['*.css', '!*.min.css'],
					dest: 'client/css',
					ext: '.min.css'
				}]
			}
		},

		concurrent: {
			options: {
				logConcurrentOutput: true
			},
			tasks: [ 'watch']
		}

	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-angular-templates');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-preprocess');
	grunt.loadNpmTasks('grunt-env');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-forever');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('dev',['env:dev','preprocess:dev','watch']);
	grunt.registerTask('prod',['ngtemplates','uglify','concat','cssmin','env:prod','preprocess:prod','forever:prod']);
}