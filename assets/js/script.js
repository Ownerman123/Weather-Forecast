const apiKey = "bb50796aabd4d5ec717c3afc5dc09b4f";
const wrongRichfield = `https://api.openweathermap.org/data/2.5/forecast?q=Richfield,Utah,USA&appid=${apiKey}&cnt=5&units=imperial`
 
let townList = window.importedList;
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


for(i =0; i < townList.length; i++) {
    if (townList[i].country === "US") {
        usCities.push(townList[i]);
    }
}

console.log(usCities);

function setCityListUntilItsDefined() {

    while(townList){
        townList = window.importedList;
        console.log(townList)
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
