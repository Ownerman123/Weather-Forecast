const apiKey = "bb50796aabd4d5ec717c3afc5dc09b4f";
const wrongRichfield = `https://api.openweathermap.org/data/2.5/forecast?q=Richfield,Utah,USA&appid=${apiKey}&cnt=5&units=imperial`
 
let cityList = window.importedList;
setCityListUntilItsDefined();

// console.log(cityList);
fetch(`https://api.openweathermap.org/data/2.5/forecast?id=5545710&appid=${apiKey}&units=imperial`).then(function (response) {

   return response.json();
    
}).then(function (data){

    console.log(data);
});

function GetWeatherData(location) {

}

let usCities = [];


for(i =0; i < cityList.length; i++) {
    if (cityList[i].country === "US") {
        usCities.push(cityList[i]);
    }
}

console.log(usCities);

function setCityListUntilItsDefined() {

    while(cityList){
        cityList = window.importedList;
    }

}



// function fetchJSONData() {
//     fetch("./jsons/citylist.json")
//         .then((res) => {
//             if (!res.ok) {
//                 throw new Error
//                     (`HTTP error! Status: ${res.status}`);
//             }
//             return res.json();
//         })
//         .then((data) => 
//               console.log(data))
//         .catch((error) => 
//                console.error("Unable to fetch data:", error));
// }
