/****************************************************************************
	fcoo-i18next-phrases.js, 

	(c) 2017, FCOO

	https://github.com/FCOO/fcoo-i18next-phrases
	https://github.com/FCOO

****************************************************************************/

(function (i18next/*, window, document, undefined*/) {
	"use strict";

    //Initialize i18next if not already done
    if ($.isEmptyObject(i18next.options)){
        window.i18next.init({
            initImmediate     : false, //prevents resource loading in init function inside setTimeout (default async behaviour)
            resources         : {},    //Empty bagend
            lng        : 'da',
            fallbackLng:'en'
       
        });
     }


    function callback( err ){
        if (err){
            //TODO          
        }
        else { 
            $('*').localize();
        }
    }
    
    function loadJSON( jsonFileName, callback, onFail ){
        var jqxhr = $.getJSON( jsonFileName );

        if (callback)
            jqxhr.done( callback );
            
        if (onFail)
            jqxhr.fail( onFail );
    }

    
    
    //Load "fcoo-i18next-abbr-name-link.json"
    i18next.loadKeyPhrases( 'data/fcoo-i18next-abbr-name-link.json', callback );

    
    //Load "fcoo-parameter.json"
    loadJSON( "data/fcoo-parameter.json", 
        function( data ) {
            //Create translation of units with WMO-unit and/or CF Standard Name units as key
            $.each( data.units, function( index, unit ){
                if (unit.en){
                    if (unit.WMO_unit)
                        i18next.addPhrase( 'unit', unit.WMO_unit, unit );                  
                    if (unit.CF_unit)
                        i18next.addPhrase( 'unit', unit.CF_unit, unit );                  
                }
            });

            //Create translation of paramter-names with WMO-abbr and/or CF Standard Name as key
            $.each( data.parameters, function( index, parameter ){
                if (parameter.en){
                    if (parameter.WMO_abbr)
                        i18next.addPhrase( 'parameter', parameter.WMO_abbr, parameter );                  
                    if (parameter.CF_SN)
                        i18next.addPhrase( 'parameter', parameter.CF_SN, parameter );                  
                }
            });
            $('*').localize();
        },
        
        function( /*err*/ ){
            //TODO
        }
    );

    
    
    /*
    Namespace button
    Standard text to buttons. 
    E.g. button:close = {da: "Luk", en:"Close"}
    */


    /*
    Namespace parameter
    Physical parameter. Using XXX codes for parameter. See http://www.nco.ncep.noaa.gov/pmb/docs/on388/table2.html
    E.g. 
        parameter:wind = {da:"vindhastighed", en:"wind speed"}
        parameter:wdir = {da:"vindretning", en:"wind direction"}
    */
/* TODO

    en: {
          'Significant wave height of combined wind waves and swell': 'Wave height',
          'degC': '&deg;C',
          'Temp.': 'Temperature'
    },
    da: {
          'Wave height': 'Bølgehøjde',
          'Mean wave period': 'Bølgeperiode',
          'Vel.': 'Strømhastighed',
          'Current speed': 'Strømhastighed',
          'Current': 'Strømhastighed',
          'Elevation': 'Vandstand',
          'Temperature': 'Temperatur',
          'Temp.': 'Temperatur',
          'Salinity': 'Salinitet',
          'Sea surface temperature': 'Temperatur',
          'Sea surface salinity': 'Salinitet',
          'Wind speed': 'Vindhastighed',
          'Wind': 'Vindhastighed',
          'Air temperature (2m)': '2 meter temperatur',
          'Sea ice concentration': 'Haviskoncentration',
          'Sea ice thickness': 'Havistykkelse',
          'Sea ice drift speed': 'Havisdrifthastighed',
          'Visibility': 'Sigtbarhed',
          'Total precipitation flux': 'Nedbør',
          '2 metre temperature': '2 meter temperatur',
          'Total cloud cover': 'Skydække',
          'Significant wave height of combined wind waves and swell': 'Bølgehøjde',
          'mm/hour': 'mm/time',
          'degC': '&deg;C',
          'knots': 'knob',
          'fraction': 'fraktion',
          'meters': 'meter'
    }
    

*/



    /*
    Namespace unit
    Physical units.
    E.g. unit:metre = {da:"meter", en:"metre"}
    */


    //Initialize/ready 
	$(function() { 

	
	}); //End of initialize/ready

}(this.i18next, this, document));
;
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


}(this, document));