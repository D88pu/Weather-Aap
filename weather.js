/*const apiKey = "8c2b344e0931c0a6df73f139e639d6cd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    try {
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

        // Handling weather icon based on weather condition
        switch (data.weather[0].main) {
            case "Cloud":
                weatherIcon.src = "https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-03-512.png";
                break;
            case "Clear":
                weatherIcon.src = "https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-03-64.png";
                break;
            case "Rain":
                weatherIcon.src = "https://cdn3.iconfinder.com/data/icons/spring-2-1/30/Rain-512.png";
                break;
            case "Drizzle":
                weatherIcon.src = "https://cdn1.iconfinder.com/data/icons/weather-colored-outline/50/Weather_Colored-Outline-11-64.png";
                break;
            case "Mist":
                weatherIcon.src = ""; // No specific icon for Mist in the provided code
                break;
            default:
                // Handle other weather conditions here or set a default icon
                break;
        }
    } catch (error) {
        console.error('There was a problem fetching the weather data:', error);
    }
}

searchBtn.addEventListener("click", () => {
    const city = searchBox.value.trim();
    if (city !== "") {
        checkWeather(city);
    } else {
        alert("Please enter a city name");
    }
});*/

// Initially, you might want to display weather for a default city or ask the user to input one.
// For instance:
// checkWeather("London");


/*const apiKey = "8c2b344e0931c0a6df73f139e639d6cd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + '&appid=${apiKey}');

    if(response.status == 404){
        document.querySelector(".error").computedStyleMap.display = "block";
        document.querySelector(".weather").computedStyleMap.display = "none";
    }
    else{
        var data = await response.json();

    //console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    if(data.weather[0].main == "Cloud"){
        weatherIcon.src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-03-512.png"
    }
    else  if(data.weather[0].main == "Clear"){
        weatherIcon.src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-03-64.png"
    }
    else  if(data.weather[0].main == "Rain"){
        weatherIcon.src="https://cdn3.iconfinder.com/data/icons/spring-2-1/30/Rain-512.png"
    }
    else  if(data.weather[0].main == "Drizzle"){
        weatherIcon.src="https://cdn1.iconfinder.com/data/icons/weather-colored-outline/50/Weather_Colored-Outline-11-64.png"
    }
    else  if(data.weather[0].main == "Mist"){
        weatherIcon.src=""
    }
    document.querySelector(".weather").computedStyleMap.display = "block";
    document.querySelector(".error").computedStyleMap.display = "none";
    }
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
checkWeather();*/



const apiKey = "8c2b344e0931c0a6df73f139e639d6cd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  try {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

    if (response.status === 404) {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    } else {
      const data = await response.json();

      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

      if (data.weather[0].main === "Cloud") {
        weatherIcon.src = "https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-03-512.png";
      } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-03-64.png";
      } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "https://cdn3.iconfinder.com/data/icons/spring-2-1/30/Rain-512.png";
      } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "https://cdn1.iconfinder.com/data/icons/weather-colored-outline/50/Weather_Colored-Outline-11-64.png";
      } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_40-64.png"; // Add your Mist weather icon URL here
      }

      document.querySelector(".weather").style.display = "block";
      document.querySelector(".error").style.display = "none";
    }
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

// You need to provide a default city or ask the user for input before calling checkWeather()
// For example:
// checkWeather("New York");
