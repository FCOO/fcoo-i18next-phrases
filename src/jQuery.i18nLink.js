/****************************************************************************
	jQuery.i18nLink.js, 

	(c) 2017, FCOO

	https://github.com/FCOO/fcoo-i18next-phrases
	https://github.com/FCOO

****************************************************************************/

(function (/*window, document, undefined*/) {
	"use strict";

    /************************************************************************
    jQuery methods to create element with contents given by i18next-keys
    *************************************************************************/

    //Create a <a>-element with abbriviation (in <span>) and title and link (if exists)
    $.i18nLink = function( key ){
        return  $('<a/>')
                    .i18n('link:'+key, 'href', {defaultValue: null})
                    .i18n('name:'+key, 'title')
                    .append( 
                        $('<span/>')
                            .i18n('abbr:'+key, {defaultValue: key.toUpperCase()} ) 
                    );
    };

    //Initialize/ready 
//	$(function() { 
//	});

}(this, document));