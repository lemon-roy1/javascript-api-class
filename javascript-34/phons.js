const loadPhons =async(searchText,dataLimit)=>{
    url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`
   const res = await fetch(url);
   const data = await res.json();
   displayPhon(data.data,dataLimit)
}
displayPhon =( phons,dataLimit) =>{
    const phonsContainer =document.getElementById('phons-container');
    phonsContainer.innerText=``;

    // only phons 10ta display
    const showAll = document.getElementById('sholl-all');
    if(dataLimit && phons.length > 10){
        phons=phons.slice(0 ,10);
        
        showAll.classList.remove('d-none');
    }
    else{
        showAll.classList.add('d-none')
    }
   

    //try massage 
    const noPhons = document.getElementById('not-found-massage');
    if(phons.length === 0){
        noPhons.classList.remove('d-none')
    }
    else{
        noPhons.classList.add('d-none')
    }
    

    phons.forEach(phone =>{
        const phonDiv =document.createElement('div');
        phonDiv.classList.add('col');
        phonDiv.innerHTML = `
        <div class="card p-4">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button href="#" class="btn btn-primary">Show datails</button>
            </div>
        </div>
        `;
        phonsContainer.appendChild(phonDiv)
    })
    // loader 
    togglespiner(false)
}
 
const perassSearch =(dataLimit) =>{
    togglespiner(true)
  const searchValue =document.getElementById('search-field');
  const searchText =searchValue.value
  loadPhons(searchText,dataLimit)

}


document.getElementById('btn-search').addEventListener('click',function (){
    perassSearch(10)
})

const togglespiner = isloader =>{
    const loaders =document.getElementById('loader')
    if(isloader){
        loaders.classList.remove('d-none')
    }
    else{
        loaders.classList.add('d-none')
    }
   
}
document.getElementById('btn-show-all').addEventListener('click',function(){
    perassSearch()
})
// loadPhons()