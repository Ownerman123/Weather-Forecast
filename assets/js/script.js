const apiKey = "bb50796aabd4d5ec717c3afc5dc09b4f";
const wrongRichfield = `https://api.openweathermap.org/data/2.5/forecast?q=Richfield,Utah,USA&appid=${apiKey}&cnt=5&units=imperial`
 


console.log(cityList);
fetch(`https://api.openweathermap.org/data/2.5/forecast?id=5545710&appid=${apiKey}&cnt=5&units=imperial`).then(function (response) {

   return response.json();
    
}).then(function (data){

    console.log(data);
});

function GetWeatherData(location) {

}



