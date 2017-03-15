/***********************************************
gruntfile to copy json-files 
from /src/
to   /demo/ OR /dist/


MANGLER
After prdo
copy icomoon\\package\\variables.scss dist\\_icomoon-variables.scss /Y & 
copy src\\_ui-icon-font-embed.scss dist\\_ui-icon-font-embed.scss /Y",            

***********************************************/

module.exports = function(grunt) {

    "use strict";

    //***********************************************
    grunt.initConfig({

        //** copy **
        copy: {
            dev : { files: [ {expand: true, flatten: true, filter: 'isFile', src: ['src/*.json'], dest: 'demo/'} ] },
            prod: { files: [ {expand: true, flatten: true, filter: 'isFile', src: ['src/*.json'], dest: 'dist/'} ] }
        }
    });//end of grunt.initConfig({...


    //****************************************************************
    grunt.registerTask('default', function() { grunt.log.writeln('No default task'); });

   
    require('load-grunt-tasks')(grunt);

    //Load grunt-packages
    grunt.loadNpmTasks('grunt-contrib-copy');
};