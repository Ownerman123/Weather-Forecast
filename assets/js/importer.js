"use strict"


import cityList from './jsons/citylist.json' with {type: 'json'}
console.log(cityList);


let usCities = [];


for(city of cityList) {
    if (city.country === "US") {
        usCities.push(city);
    }
}

console.log(usCities);
