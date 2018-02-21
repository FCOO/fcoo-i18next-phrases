# fcoo-i18next-phrases
[namespace-key-lang]:https://github.com/FCOO/i18next-phrases#phrase-namespace-key-lang
[key-namespace-lang]:https://github.com/FCOO/i18next-phrases#key-phrase-key-namespace-lang

## Description
Global translations/phrases for i18next in FCOO web applications
All the translations are in separate json-files listed below. Each json-file in located in `/src` and represent one or more namespace



## Installation
### bower
`bower install https://github.com/FCOO/fcoo-i18next-phrases.git --save`

## Usage
Below is a section for each json-file included with namespace(s), file name and format ().

### Namespaces: `abbr`/`name`/`link`. File: [fcoo-i18next-abbr-name-link.json](https://gitlab.com/FCOO/fcoo-i18next-phrases/blob/src/data/fcoo-i18next-abbr-name-link.json). Format: [key-namespace-lang]

#### abbr
The national abbreviation of institutes, organisations, models etc.
Only needed if $.i18nLink if `key.toUpperCase` is different from abbr
E.g. 
if key = `'fcoo'` and abbr = `'FCOO'` => no need for 'abbr:fcoo'
if key = `'abcd'` and abbr = `'abcd'` or `'A.B.C.D.'` => abbr needed

#### `name`
Full name of institutions or organizations. 
Use national abbreviation as key and include name in national language. 
E.g. key = `name:bsh`, translation `en:"Federal Maritime and Hydrographic Agency", de:"Bundesamt für Seeschifffahrt und Hydrographie"`

#### `link`
The link-address to a home-page. Use the address as key. 
E.g. key = `link:dmi.dk`, translation `da:"http://dmi.dk"`, `en:"http://dmi.dk/en"`


### Namespace: `parameter` and `unit` File: [fcoo-i18next-parameter.json](https://gitlab.com/FCOO/fcoo-i18next-phrases/blob/src/data/fcoo-i18next-parameter.json). Format: [namespace-key-lang]

Using [CF Conventions and Metadata](http://cfconventions.org/index.html) -> [Standard Names](http://cfconventions.org/standard-names.html) as key for names of physical parameters
WMO -> [PARAMETERS & UNITS](http://www.nco.ncep.noaa.gov/pmb/docs/on388/table2.html)

#### `parameter`
E.g. key = `parameter:sea_water_salinity`, translation `da:"Salinitet", en:"Salinity"`

#### `unit`
Physical units.
E.g. key = `unit:metre`, translation `da:"meter", en:"metre"`


### Namespace: `error` File: [fcoo-i18next-error.json](https://gitlab.com/FCOO/fcoo-i18next-phrases/blob/src/data/fcoo-i18next-error.json). Format: [namespace-key-lang]
Translation of standard html errors and descriptions

E.g. 
key = `error:400`, translation `da:"Forkert anmodning", en:"Bad Request"`
key = `error:409-desc`, translation `en:"The request could not be completed because of a conflict in the request"`


## Copyright and License
This plugin is licensed under the [MIT license](https://github.com/FCOO/fcoo-i18next-phrases/LICENSE).

Copyright (c) 2017 [FCOO](https://github.com/FCOO)

## Contact information

Niels Holt nho@fcoo.dk
