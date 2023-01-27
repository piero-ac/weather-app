const citySearchForm = document.querySelector("#city-search-form");
const city = document.querySelector("#city");
const currentTemp = document.querySelector("#current-temp");
const weatherName = document.querySelector("#weather-name");
const highTemp = document.querySelector("#high-temp");
const lowTemp = document.querySelector("#low-temp");
const key = config.MY_API_KEY;

let currentCity = 'Perth Amboy';
let stateCode = 'NJ';


citySearchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Submitted');
});


function getWeather(city) {
    let response = undefined;

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},nj,us&appid=${key}`)
}
