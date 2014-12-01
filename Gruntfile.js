module.exports = function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		autoprefixer: {
			dist: {
				files: {
					'media/css/style.css':'media/css/style.css'
				}
			}
		},
		sass:{
			dist:{
				options:{
					style:'compressed'
				},
				files:{
					'media/css/style.css':'media/sass/style.scss'
				}
			}
		},
		watch: {
			css: {
				files: ['media/sass/*.scss', 'media/sass/*/*.scss', 'media/sass/*/*/*.scss'],
				tasks: ['sass', 'autoprefixer']
			}
		}
	});
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['sass']);
	//grunt.registerTask('default', ['watch']);
};

