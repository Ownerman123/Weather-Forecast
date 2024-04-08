const apiKey = "bb50796aabd4d5ec717c3afc5dc09b4f";
const wrongRichfield = `https://api.openweathermap.org/data/2.5/forecast?q=Richfield,Utah,USA&appid=${apiKey}&cnt=5&units=imperial`
const formBtn = document.getElementById("submit-btn");
const stateInput = document.getElementById("states");
const cityInput = document.getElementById("city-input");
const todaysWeatherCard = document.getElementById("first-day-card");
const fiveDayCardsContainer = document.getElementById("five-day-cards");
formBtn.addEventListener('click', GetCityId);

 
let townList = window.importedList;
let usCities = [];
let markedCities = [];

setUsCities();




function GetCityId(event){
    event.preventDefault();
   
    const curCity = usCities.filter(city => city.name === cityInput.value && city.state === stateInput.value);
    const cityid = curCity[0].id;
    markedCities.push(cityid);
    localStorage.setItem("saved-cities", JSON.stringify(markedCities));
    DisplayCityInfo(cityid);
    
    

    
}

 function DisplayCityInfo(id) {

    // create a container, add a header with today in location text include weather icon, add ps for temp windspeed and humidity. 
    // create a container with a header of 5-day Forecast:, then cards with dates at the top with weather icon temp windspeed and humidity.

     const cityinfo = GetWeatherData(id);

    



}


 const GetWeatherData = function(locationId) {
    console.log('getting data')
    fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${locationId}&appid=${apiKey}&units=imperial`).then(function (response) {

    return response.json();
     
 }).then(function (data){
    console.log(data);
    CreateCardsWithData(data);
     
 });
}

function CreateCardsWithData(cityinfo) {
    const PickEmoji = function(weather) {
        
    
        let emoji;
    
        if(weather === "Clouds") {
            emoji = "☁" ;
        }
        else if(weather === "Snow") {
            emoji = "🌨" ;
        }    
        else if(weather=== "Rain") {
            emoji = "🌧" ;
        }
        else if(weather=== "Thunderstorm") {
            emoji = "⛈" ;
        }
        else if(weather=== "Mist") {
            emoji = "🌫" ;
        }
        else if(weather=== "Drizzle") {
            emoji = "🌦" ;
    
        }else if(weather=== "Clear") {
            emoji = "☀" ;
    
        }else{
            emoji = "❔" ;
        }
        console.log(emoji);

        return emoji;
    
    
    }
    const firstdayCard = document.createElement("div");
    const firstdayinfo = cityinfo.list[0];
    const firstdayweather = PickEmoji(firstdayinfo.weather[0].main);
    const firstdayTitle = document.createElement('h3');
    const firstdayTitletextnode = document.createTextNode(`Today in ${cityinfo.city.name}  ${firstdayweather}`);
    firstdayTitle.append(firstdayTitletextnode);
    const firstdayps = document.createElement("p");
    const firstdaypstextnode = document.createTextNode(`Temp: ${firstdayinfo.main.temp} \n Wind: ${firstdayinfo.wind.speed}MPH \n Humidity: ${firstdayinfo.main.humidity} %`);
    firstdayps.append(firstdaypstextnode);
    console.log(firstdayTitle ,firstdayps)
    firstdayCard.append(firstdayTitle);
    firstdayCard.append(firstdayps);
    todaysWeatherCard.append(firstdayCard);
    firstdayCard.setAttribute('class', "bg-primary m-3");
    
}



console.log(usCities);

function setUsCities() {
    if(townList){
    for (i = 0; i < townList.length; i++) {
        if (townList[i].country === "US") {
            usCities.push(townList[i]);
        }
    }
    }else{
        // set dummy info for local testing
        usCities = [ {
            id: 4828081,
            name: "Elba",
            state: "AL",
            country: "US",
            coord: {
                lon: -86.067719,
                lat: 31.41461
            }
        },
        {
            id: 5268798,
            name: "Rice Lake",
            state: "WI",
            country: "US",
            coord: {
                lon: -91.738228,
                lat: 45.506069
            }
        },
        {
            id: 5268838,
            name: "Richfield",
            state: "WI",
            country: "US",
            coord: {
                lon: -88.193977,
                lat: 43.256119
            }
        },
        {
            id: 5268850,
            name: "Richland Center",
            state: "WI",
            country: "US",
            coord: {
                lon: -90.386787,
                lat: 43.334709
            }
        },]
    }

}

function SetAvailableTags(state) {
    const availableTags = [];

    for(town of usCities) {
        if(town.state === state) {
            availableTags.push(town.name);
        }
    }

    

    console.log("state changed");

    $("#city-input").autocomplete({source: availableTags});

}





