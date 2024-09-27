function fetchFacts() {
    fetch('https://catfact.ninja/facts')
        .then(response => response.json())
        .then(data => {
            displayFacts(data.data);
        })
        .catch(error => {
            console.error('Error fetching cat facts:', error);
        });
}

function displayFacts(facts) {
    const catFactList = document.getElementById('cat-fact-list');
    facts.forEach(fact => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = fact.fact;
        catFactList.appendChild(li);
    });
}

function fetchWeather() {
    const API_key = 'd84fed5c7769afc2c52b51ceb28530b2'; 
    const city_name = 'London';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`)
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
        <p>City: ${data.name}</p>
        <p>Temperature: ${(data.main.temp - 273.15).toFixed(2)} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
    `;
    weatherInfo.innerHTML = weatherContent;
}

function fetchJokes() {
    fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response => response.json())
        .then(data => {
            displayJokes(data);
        })
        .catch(error => {
            console.error('Error fetching jokes:', error);
        });
}

function displayJokes(jokes) {
    const jokeList = document.getElementById('joke-list');
    jokes.forEach(joke => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = `${joke.setup} - ${joke.punchline}`;
        jokeList.appendChild(li);
    });
}

function init() {
    fetchFacts();
    fetchWeather();
    fetchJokes();
}

document.addEventListener('DOMContentLoaded', init);
