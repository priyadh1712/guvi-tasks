// Fetch data from Cat Facts API
function fetchCatFacts() {
    fetch('https://catfact.ninja/facts')
        .then(response => response.json())
        .then(data => {
            displayCatFacts(data.data);
        })
        .catch(error => {
            console.error('Error fetching cat facts:', error);
        });
}

function displayCatFacts(facts) {
    const catFactList = document.getElementById('cat-fact-list');
    catFactList.innerHTML = ''; 
    facts.slice(0, 5).forEach(fact => {  
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = fact.fact;
        catFactList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', fetchCatFacts);
