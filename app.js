const citySearchForm = document.querySelector("#city-search-form");
const cityNameInput = document.querySelector("#city-name");
const city = document.querySelector("#city");
const currentTemp = document.querySelector("#current-temp");
const weatherName = document.querySelector("#weather-name");
const highTemp = document.querySelector("#high-temp");
const lowTemp = document.querySelector("#low-temp");
const key = config.MY_API_KEY;

const defaultCity = 'Woodbridge';
let currentCity = '';
let stateCode = 'NJ';

// load default city data onload
window.addEventListener('load', (e) => {
    getWeather(defaultCity)
        .then((data) => {
            displayWeather(data);
        });
})

citySearchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    currentCity = cityNameInput.value;

    getWeather(currentCity)
        .then((data) => {
            displayWeather(data);
        });
    cityNameInput.innerText = '';
});


async function getWeather(city) {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},nj,us&appid=${key}&units=imperial`);
        return response.data;
    } catch (e) {
        console.error(e);
        return "Something went wrong";
    }
}

function displayWeather(data) {
    const newCity = data.name;
    const newCurrentTemp = Math.floor(data.main.temp);
    const newWeatherName = data.weather[0].main;
    const newHighTemp = Math.floor(data.main.temp_max);
    const newLowTemp = Math.floor(data.main.temp_min);

    city.innerText = newCity;
    currentTemp.innerText = `${newCurrentTemp}°`;
    weatherName.innerText = newWeatherName;
    highTemp.innerText = `H:${newHighTemp}°`;
    lowTemp.innerText = `L:${newLowTemp}°`;

}