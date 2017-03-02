# fcoo-i18next-phrases
>


## Description
Global translations/phrases for i18next in FCOO web applications
See [src/fcoo-i18next-phrases.js](https://gitlab.com/FCOO/fcoo-i18next-phrases/blob/src/fcoo-i18next-phrases.js) to see all keys and translations


## Installation
### bower
`bower install https://github.com/FCOO/fcoo-i18next-phrases.git --save`

## Usage
The following namespaces are used:

### `name`
Full name of institutions or organizations. 
Use national abbreviation as key and include name in national language. 
E.g. key = `name:bsh`, translation `en:"Federal Maritime and Hydrographic Agency", de:"Bundesamt für Seeschifffahrt und Hydrographie"`

### `link`
The link-address to a home-page. Use the address as key. 
E.g. key = `link:dmi.dk`, translation `da:"http://dmi.dk"`, `en:"http://dmi.dk/en"`

### `button`
Standard text to buttons. 
E.g. key = `button:close`, translation `da: "Luk", en:"Close"`

### `parameter`
Physical parameter. Using XXX codes for parameter. See http://www.nco.ncep.noaa.gov/pmb/docs/on388/table2.html
E.g. 
 key = `parameter:wind`, translation `da:"vindhastighed", en:"wind speed"`
 key `parameter:wdir`, translation `da:"vindretning", en:"wind direction"`

### `unit`
Physical units.
E.g. `unit:metre = {da:"meter", en:"metre"}`







## Copyright and License
This plugin is licensed under the [MIT license](https://github.com/FCOO/fcoo-i18next-phrases/LICENSE).

Copyright (c) 2017 [FCOO](https://github.com/FCOO)

## Contact information

Niels Holt nho@fcoo.dk
