const loadQuote =() =>{
    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(data => displayData(data))
}
const displayData = quote =>{
 const blockQuote = document.getElementById('quoes')
 console.log(quote);
 blockQuote.innerText = quote.quote;
}
