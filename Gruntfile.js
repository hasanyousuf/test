module.exports=function(grunt){
grunt.initConfig({
jshint: {
	all:['Gruntfile.js','src/*.js']
}
,}
);

grunt.loadNpmTasks('jshint');
grunt.registerTask('default',['jshint']);
};
