function formatDate(date) {
    let minutes = date.getMinutes().toString().padStart(2, "0");
    let hours = date.getHours().toString().padStart(2, "0");
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayOfWeek = days[date.getDay()];

    return `${dayOfWeek} ${hours}:${minutes}`;
}

let currentDateElement = document.querySelector("#current-date");
let currentDate = new Date();
currentDateElement.innerHTML = formatDate(currentDate);

function searchCity(city) {
    let apiKey = "9ea42828edao36851f80td6c84bff3a7";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayTemperature);
}

function search(event) {
    event.preventDefault();
    let city = document.querySelector("#search-text-input").value;
    searchCity(city);
    getForecast(city);
}

let form = document.querySelector("#city-form");
form.addEventListener("submit", search);

function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[date.getDay()];
}
function displayTemperature(response) {
    let temperatureElement = document.querySelector("#current-temperature");
    let detailsElement = document.querySelector("#temperature-details");
    let iconElement = document.querySelector(".current-temperature-icon");

    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");

    let humidity = `💧 <strong>${response.data.temperature.humidity}%</strong> humidity and`;
    let wind = `🌪️ <strong>${response.data.wind.speed} Km/h</strong> wind`;

    let temperature = Math.round(response.data.temperature.current);
    let cityElement = document.querySelector("#current-city");
    let iconUrl = response.data.condition.icon_url;

    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = temperature;
    detailsElement.innerHTML = `${humidity} ${wind}`;
    iconElement.innerHTML = `<img src="${iconUrl}" alt="Weather Icon" class="weather-icon">`;

    if (humidityElement) {
        humidityElement.textContent = response.data.temperature.humidity;
    }

    if (windSpeedElement) {
        windSpeedElement.textContent = response.data.wind.speed;
    }
}