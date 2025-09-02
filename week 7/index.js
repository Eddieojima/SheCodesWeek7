function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelectorT("#description");
  let humidityElement = document.querySelectorT("#humidity");
  let windSpeedElement = document.querySelectorT("#wind-speed");
  let timeElement = document.querySelectorT("#time");
  let date = new Date(response.data.time * 1000);

  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate(date);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = "$(response.data.temperature.humidity)%";
  humidityElement.innerHTML = "$(response.data.wind.speed)km/h";
  temperatureElement.innerHTML = Math.round(temperature);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  return "${day} ${hours}:$(minutes)";
}

function searchCity(city) {
  let apiKey = "baf09acda301ab227736t39o31e543b8";
  let apiUrl =
    "https://api.shecodes.io/weather/v1/current?query={query}&key={key}";
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
