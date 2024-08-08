fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // a. Get all the countries from Asia continent /region using Filter method
    const asianCountries = data.filter(country => country.region === "Asia");
    console.log("Asian Countries:", asianCountries);

    // b. Get all the countries with a population of less than 2 lakhs using Filter method
    const countries_b = data.filter(country => country.population < 200000);
    console.log("Countries with Population < 2 Lakhs:", countries_b);

    // c. Print the following details name, capital, flag, using forEach method
    data.forEach(country => {
      console.log(`Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags.svg}`);
    });

    // d. Print the total population of countries using reduce method
    const total = data.reduce((sum, country) => sum + country.population, 0);
    console.log(`Total Population: ${total}`);

    // e. Print the country that uses US dollars as currency
    const usd = data.filter(country => 
      country.currencies && Object.keys(country.currencies).includes("USD")
    );

    usd.forEach(country => {
      console.log(`Country: ${country.name.common} uses USD as currency.`);
    });
  })
  .catch(error => console.error('Error:', error));
