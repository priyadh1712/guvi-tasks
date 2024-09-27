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
    jokeList.innerHTML = ''; 
    jokes.slice(0, 5).forEach(joke => { 
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = `${joke.setup} - ${joke.punchline}`;
        jokeList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', fetchJokes);
