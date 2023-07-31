const apiKey = "2f23c77b2005081705a46ce394f7082f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{ 
        let data = await response.json();

    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src[0].main == "images/rain.png";
        }else if(data.weather[0].main == "Snow"){
            weatherIcon.src[0].main == "images/snow.png"
        }else if (data.weather[0].main == "Mist"){
            weatherIcon.src[0].main == "images/mist.png"
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src[0].main == "images/drizzle.png"
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none"
    }

    }
  

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value)
})
