/***********************************************
gruntfile.js for fcoo-i18next-phrases

https://github.com/FCOO/fcoo-i18next-phrases

***********************************************/

module.exports = function(grunt) {

    "use strict";

    //***********************************************
    grunt.initConfig({
        "fcoo_grunt_plugin":{
            default: {
                "haveJavaScript": true,  //true if the packages have js-files
                "haveStyleSheet": false, //true if the packages have css and/or scss-files
                "haveGhPages"   : true,  //true if there is a branch "gh-pages" used for demos

                "beforeProdCmd": "",  //Cmd to be run at the start of prod-task. Multi cmd can be seperated by "&"
                "beforeDevCmd" : "",  //Cmd to be run at the start of dev-task. Multi cmd can be seperated by "&"

                "afterProdCmd" : "grunt copy:prod --gruntfile gruntfile_copy.js", //Cmd to be run at the end of prod-task: copy json-files from src to dist
                "afterDevCmd"  : "grunt copy:dev --gruntfile gruntfile_copy.js",  //Cmd to be run at the end of dev-task: copy copy json-files from src to demo

                "DEBUG"        : false   //if true different debugging is on and the tempoary files are not deleted
            }
        }
    });


    //****************************************************************
    //Load grunt-packages
    grunt.loadNpmTasks('grunt-fcoo-grunt-plugin');
};