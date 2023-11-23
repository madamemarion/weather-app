function displayTemperature(response) {
    let temperatureElement = document.querySelector("#current-temperature");
    let detailsElement = document.querySelector("#temperature-details");
    let iconElement = document.querySelector(".current-temperature-icon");
  
    let humidity = `💧 <strong>Humidity:</strong> ${response.data.temperature.humidity}%`;
    let wind = `🌬️ <strong>Wind:</strong> ${response.data.wind.speed} Km/h`;
    let temperature = Math.round(response.data.temperature.current);
    let cityElement = document.querySelector("#current-city");
    let iconUrl = response.data.condition.icon_url;
  
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = temperature;
    detailsElement.innerHTML = `${humidity} - ${wind}`;
    iconElement.innerHTML = `<img src="${iconUrl}" alt="Weather Icon">`;
  }
  
  function searchCity(city) {
    let apiKey = "9ea42828edao36851f80td6c84bff3a7";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(displayTemperature);
  }
  
  function search(event) {
    event.preventDefault();
    let city = document.querySelector("#search-text-input").value;
    searchCity(city);
  }
  
  let form = document.querySelector("#city-form");
  form.addEventListener("submit", search);
  
  function formatDate(date) {
    let minutes = date.getMinutes().toString().padStart(2, "0");
    let hours = date.getHours().toString().padStart(2, "0");
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let dayOfWeek = days[date.getDay()];
  
    return `${dayOfWeek} ${hours}:${minutes}`;
  }
  
  let currentDateElement = document.querySelector("#current-date");
  let currentDate = new Date();
  currentDateElement.innerHTML = formatDate(currentDate);
  