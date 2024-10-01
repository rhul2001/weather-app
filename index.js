const apiKey = "abcbb36a75f3c38d5e248bf7ac4fc805";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

    if (!response.ok) {
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".error").style.display = "block";
    } else {
        const data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        const weatherCondition = data.weather[0].main.toLowerCase();

        if (weatherCondition === "clouds") {
            weatherIcon.src = "cloud.png";
        } else if (weatherCondition === "clear") {
            weatherIcon.src = "clear.png";
        } else if (weatherCondition === "rain") {
            weatherIcon.src = "rainy.png";
        } else if (weatherCondition === "drizzle") {
            weatherIcon.src = "drizzle.png";
        } else if (weatherCondition === "mist") {
            weatherIcon.src = "mist.jpeg";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchbtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
});
