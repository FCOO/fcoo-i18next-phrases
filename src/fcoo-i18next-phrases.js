/****************************************************************************
	fcoo-i18next-phrases.js, 

	(c) 2017, FCOO

	https://github.com/FCOO/fcoo-i18next-phrases
	https://github.com/FCOO

****************************************************************************/

(function (window/*, document, undefined*/) {
	"use strict";
	
	//Create fcoo-namespace
	//window.fcoo = window.fcoo || {};
    //var ns = window;

    /*
    Namespace name
    Full name of institutions or organizations. 
    Use national abbreviation as key and include name in national language. 
    */
    window.i18next.addPhrases( 'name', {
        fcoo: {
            da: "Forsvarets Center for Operativ Oceanografi",
            en: "Defence Center for Operational Oceanography"
        },
        dmi: {
            da: "Danmarks Meteorologiske Institut",
            en: "Danish Meteorological Institute"
        },
        ecmwf: {
            en: "European Centre for Medium-Range Weather Forecasts"
        },
        noaa: {
            en: "National Oceanic and Atmospheric Administration"
        },
        navo: {
            en: "The Naval Oceanographic Office"
        },
        bsh: {
            en: "Federal Maritime and Hydrographic Agency",
            de: "Bundesamt für Seeschifffahrt und Hydrographie"
        },
        smhi: {
            en: "Swedish Meteorological and Hydrological Institute",
            sv: "Sveriges meteorologiska och hydrologiska institut"
        },

        

    });

    /*
    Namespace abbr
    The abbrivation of institutes etc.
    Only needed in $.i18nLink if key.toUpperCase is different from abbr
    E.g. if key = 'fcoo' and abbr = 'FCOO' => no need for 'abbr:fcoo'
    */
    window.i18next.addPhrases( 'abbr', {
  

    });

    /*
    Namespace link
    The link-address to a home-page. Use the address as key. 
    E.g. key = "link:dmi.dk", translation da:"http://dmi.dk", en:"http://dmi.dk/en"
    */
    window.i18next.addPhrases( 'link', {
        fcoo : { da: "//fcoo.dk", en: "//fcoo.dk?lang=en" },
        dmi  : { da: "http://dmi.dk",  en: "http://dmi.dk/en" },
        ecmwf: { en: "http://www.ecmwf.int" },
        noaa : { en: "http://noaa.gov" },
        navo : { en: "http://www.usno.navy.mil/NAVO" },
        bsh  : { en: "http://www.bsh.de/en", de: "http://www.bsh.de" },
        smhi : { en: "//www.smhi.se/en", sv: "//www.smhi.se" }


    });

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



    /*
    jQuery methods to create element with contents given by i18next-keys
    */

    //Create a <a>- or <span>-element with abbriviation and title and link (if exists)
    $.i18nLink = function( key ){
        var $element,
            abbr = window.i18next.t('abbr:'+key, {defaultValue:''});

        if (window.i18next.t('link:'+key, {defaultValue:''})){
            //Create an <a>-element
            $element = $('<a/>');
            $element.i18n('link:'+key, 'href');
        }
        else 
            //Create a <span>-element
            $element = $('<span/>');

        //Add title
        if (window.i18next.t('name:'+key, {defaultValue:''}))
            $element.i18n('name:'+key, 'title');          

        //Add abbrivation
        if (abbr)
            $element.i18n('abbr:'+key);          
        else
            $element.text( key.toUpperCase());          
        
        return $element;
    };

    //Initialize/ready 
	$(function() { 

	
	}); //End of initialize/ready

}(this, document));