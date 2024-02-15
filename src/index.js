const searchBtn = document.querySelector("button.search-btn");
const searchInput = document.querySelector("input.search-box-input");
const weatherDescription = document.querySelector(".weather-description");
const weatherLocation = document.querySelector(".weather-location");
const weatherTemperture = document.querySelector(".temperature");

async function fetchWeather(city) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=f12e63291c54404c94063710241102&q=${city}`,
    {
      mode: "cors",
    },
  );

  const weatherData = await response.json();
  console.log(weatherData);

  weatherLocation.textContent = weatherData.location.name;
  weatherDescription.textContent = `The weather is ${weatherData.current.condition.text}`;
  weatherTemperture.textContent = `${weatherData.current.temp_c}°C/ ${weatherData.current.temp_f}°F`;
}

searchBtn.addEventListener("click", () => fetchWeather(searchInput.value));
