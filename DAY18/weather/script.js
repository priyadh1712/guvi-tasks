function fetchWeather() {
    const apiKey = 'd84fed5c7769afc2c52b51ceb28530b2'; 
    const city = 'London';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    const weatherContent = `
        <p><strong>City:</strong> ${data.name}</p>
        <p><strong>Temperature:</strong> ${(data.main.temp - 273.15).toFixed(2)} °C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
    `;
    weatherInfo.innerHTML = weatherContent;
}

document.addEventListener('DOMContentLoaded', fetchWeather);
