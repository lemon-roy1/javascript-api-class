const loadmeal = (search) => {
    url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data =>displaymeals(data.meals ))
}

 const displaymeals = meals=>{
    const containerMeals =document.getElementById('meal-container');
     containerMeals.innerHTML =``;
    meals.forEach(meal =>{
        console.log(meal)
        const mealsDiv =document.createElement('div')
        mealsDiv.classList.add('col')
        mealsDiv.innerHTML = `
        <div onclick="lodemealsDetail(${meal.idMeal})" class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title text-primary">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
                </div>
        </div>
        `
        containerMeals.appendChild(mealsDiv)
    })
 }
 const searchfood = () =>{
    const searchFields =document.getElementById('search-field');
    const searchtext =searchFields.value;
    loadmeal(searchtext);
    searchFields.value ='';

 }
 const lodemealsDetail =(idMeal)=>{
    url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealsDetail(data.meals[0]))
 }

 const displayMealsDetail =meal => {
    const detailscontainer =document.getElementById('deetail-container')
    detailscontainer.innerHTML =``;
    const mealDiv =document.createElement('div')
    mealDiv.classList.add('card')
    mealDiv.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title text-primary">${meal.strMeal}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    `
    detailscontainer.appendChild(mealDiv)


 }

 loadmeal('')