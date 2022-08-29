const loadcontrice = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(rec => rec.json())
    .then(data => displaycontrice(data));

}
const displaycontrice = countrices =>{

    const countryCountrise =document.getElementById('contrise-contriner');

    countrices.forEach(country => {
        countryDiv =document.createElement('div');
        countryDiv.classList.add('countrys')
        console.log(country);
        countryDiv.innerHTML = `
        <h3>Name:${country.name.common}</h3>
        <p>capital : ${country.capital ? country.capital[0] : 'No capital'}</p>
        <button onclick ="loadCountry('${country.cca2}')">Detalis</button>
        `
        countryCountrise.appendChild(countryDiv);
    })
}
const loadCountry = (code) =>{
 
    url = `https://restcountries.com/v3.1/alpha/${code}`
   fetch(url)
   .then(res => res.json())
   .then(data => displayCounter(data[0]))

}

const  displayCounter = country=>{
    console.log(country);
    const countrydetails =document.getElementById('country-details')
    countrydetails.innerHTML =`
    <h2>details:${country.name.common}</h2>
    <img src="${country.flags.png}">
    `
}

loadcontrice()