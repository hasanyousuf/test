module.exports=function(grunt){
grunt.initConfig({
	jshint: {
			all:['Gruntfile.js','src/*.js']
		},
	casperjs: {
  		options: {
    		casperjsOptions: ['--foo=bar', '--no-colors']
 	 },
  		files: ['src/index.js']
	},
});

grunt.loadNpmTasks('grunt-casperjs');
grunt.loadNpmTasks('jshint');

grunt.registerTask('default',['jshint']);
};
