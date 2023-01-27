const citySearchForm = document.querySelector("#city-search-form");
const city = document.querySelector("#city");
const currentTemp = document.querySelector("#current-temp");
const weatherName = document.querySelector("#weather-name");
const highTemp = document.querySelector("#high-temp");
const lowTemp = document.querySelector("#low-temp");


citySearchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Submitted');
})