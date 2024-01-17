async function getWeather() {
    const cityInput = document.getElementById('cityInput').value;

    try {
        const coordinates = await getCoordinates(cityInput);
        const weatherData = await getWeatherData(coordinates);
        displayWeather(weatherData);
    } catch (error) {
        console.error('Error:', error);
        alert('Error fetching weather data.');
    }
}

async function getCoordinates(city) {
    const apiKey = `d017476ed5d76f9f701fab4862f38713`;
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
    const apiKey = `d017476ed5d76f9f701fab4862f38713`;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&exclude=minutely,hourly&appid=${apiKey}`;

    const response = await fetch(weatherUrl);
    const data = await response.json();

    if (response.ok) {
        return data;
    } else {
        throw new Error(`Failed to fetch weather data. ${data.message}`);
    }
}

function displayWeather(weatherData) {

    const weatherInfoDiv = document.getElementById('weatherInfo');
    weatherInfoDiv.innerHTML = '';

    const temperatureCelsius = Math.round(weatherData.main.temp);
    const weatherDataFields = {
        'Temperature': temperatureCelsius + ' °C',
        'Pressure': weatherData.main.pressure,
        'Humidity': weatherData.main.humidity,
        'Wind speed': weatherData.wind.speed,
        'Sky': weatherData.weather[0].main
    };

    for (const [field, value] of Object.entries(weatherDataFields)) {
        const fieldDiv = document.createElement('div');
        fieldDiv.textContent = `${field}: ${value}`;
        weatherInfoDiv.appendChild(fieldDiv);
    }

}