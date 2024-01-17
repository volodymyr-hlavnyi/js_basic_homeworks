import {apiKey} from './api.js';

function convertUTCToLocalTimeWithAMPM(utcTime) {
    const date = new Date(utcTime * 1000);
    let localTime;
    localTime = date.toLocaleTimeString('en-US', {hour12: true, hour: '2-digit', minute: '2-digit'});
    return localTime;
}

async function getWeatherIconUrl(iconId) {
    let iconUrl;
    iconUrl = `http://openweathermap.org/img/w/${iconId}.png`;
    return iconUrl;
}

async function getWeather() {
    const cityInput = document.getElementById('cityInput').value;

    try {
        const coordinates = await getCoordinates(cityInput);
        const weatherData = await getWeatherData(coordinates);
        console.log(weatherData);
        displayWeather(weatherData);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function getCoordinates(city) {

    const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;

    const response = await fetch(geoUrl);
    const data = await response.json();

    if (data.length === 0) {
        throw new Error('City not found');
    }

    return {
        lat: data[0].lat,
        lon: data[0].lon
    };
}

async function getWeatherData(coordinates) {

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&exclude=minutely,hourly&appid=${apiKey}`;

    const response = await fetch(weatherUrl);
    const data = await response.json();

    if (response.ok) {
        return data;
    } else {
        throw new Error(`Failed to fetch weather data. ${data.message}`);
    }
}

export { getWeather };

async function displayWeather(weatherData) {

    const weatherInfoDiv = document.getElementById('weatherInfo');
    weatherInfoDiv.innerHTML = '';

    // console.log(weatherData.name);

    const iconId = weatherData.weather[0].icon;
    const iconUrl = await getWeatherIconUrl(iconId);

    const iconImg = document.createElement('img');
    iconImg.src = iconUrl;
    weatherInfoDiv.appendChild(iconImg);

    const temperatureCelsius = Math.round(weatherData.main.temp);
    const windSpeed = Math.round(weatherData.wind.speed);
    const localTimeWithAMPMSunrise = convertUTCToLocalTimeWithAMPM(weatherData.sys.sunrise);
    const localTimeWithAMPMSunset = convertUTCToLocalTimeWithAMPM(weatherData.sys.sunset);
    const weatherDataFields = {
        'Country': weatherData.sys.country,
        'City': weatherData.name,
        'Description': weatherData.weather[0].description,
        'Temperature': temperatureCelsius + ' °C',
        'Pressure': weatherData.main.pressure,
        'Humidity': weatherData.main.humidity,
        'Wind speed': windSpeed + ` m/s`,
        // 'Sky': weatherData.weather[0].main,
        'Sunrise': localTimeWithAMPMSunrise,
        'Sunset': localTimeWithAMPMSunset
    };

    for (const [field, value] of Object.entries(weatherDataFields)) {
        const fieldDiv = document.createElement('div');
        fieldDiv.textContent = `${field}: ${value}`;
        weatherInfoDiv.appendChild(fieldDiv);
    }

}

