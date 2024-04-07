"use strict"


import cityList from './jsons/citylist.json' with {type: 'json'}
console.log(cityList);

const importedList = cityList;

module.exports = {importedList};
