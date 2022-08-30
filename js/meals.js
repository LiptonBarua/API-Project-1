const loadmeals = (search)=>{
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayMeals(data.meals))
}
loadmeals()

const displayMeals =(meals)=>{
const mealsContainer = document.getElementById('meals-container')
mealsContainer.innerHTML =''
 meals.forEach(meal => {
    console.log(meal);
 const div = document.createElement('div')
 div.classList.add('col')
 div.innerHTML =`
 <div onclick="displayIdMeals(${meal.idMeal})" class="card bg-dark text-white">
 <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
 <div class="card-body">
   <h5 class="card-title">${meal.strMeal}</h5>
   <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
 </div>
</div>
 `;
 mealsContainer.appendChild(div)
 });
}

const btnSearch=()=>{
    const searchField = document.getElementById('search-field')
    const searchValue = searchField.value;
    loadmeals(searchValue)
    searchField.value =''
}

const displayIdMeals =(idMeal)=>{
const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
fetch(url)
.then(res=>res.json())
.then(data=>displayDetiels(data.meals[0]))
}

const displayDetiels =(meal)=>{
 const detielsContainer =document.getElementById('detiels-container');
 detielsContainer.innerHTML =''
 const detielsDiv = document.createElement('div')
 detielsDiv.classList.add('col')
 detielsDiv.innerHTML = `
  <div class="card bg-dark text-white" style="width: 22rem;">
  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title">${meal.strMeal}</h5>
  <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
  </div>
  </div>
 `
 detielsContainer.appendChild(detielsDiv)
}