module.exports = function(grunt){
//Project configuration
grunt.initConfig({
//It will make your node configurations available to use
    pkg: grunt.file.readJSON('package.json'),

//JSHint configurations
	jshint: {
			//The paths to make the
			//The paths tell JSHint which files to validate
			all:['Gruntfile.js','src/*.js']
		},
	casperjs: {
  		options: {
    		casperjsOptions: [ '--no-colors', '--ssl-protocol=tlsv1','--verbose=true',
    		'--includes=./lib/globalvars.js,./lib/custom_functions.js',
    		'--server='+grunt.option("server"),
    		'--username=' + grunt.option("username"),
    		'--password='+ grunt.option("password"),
    		'--log-level='+ grunt.option("logs")
 	 ]},
  		files: ['src/index.js']
	},
});

//Loading the plugins
grunt.loadNpmTasks('grunt-casperjs');
grunt.loadNpmTasks('grunt-contrib-jshint');
//grunt.loadNpmTasks('jshint');
grunt.registerTask('default',['jshint']);
};
