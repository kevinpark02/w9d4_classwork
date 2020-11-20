// Copying what I see from the Weekly Meal Planner Demo

// grab the dom elements we need (groceries, grocery-form, recipe-list, recipes)
const groceries = document.querySelector(".groceries"); //We put .groceries because this is a class
const groceryForm = document.querySelector(".grocery-form"); //See comment above
const recipeList = document.querySelector(".recipe-list");
const recipe = document.querySelector(".recipes");

//create variables to hold localStorage things
const lsItems = JSON.parse(localStorage.getItem('items')) || [];
const lsRecipes = JSON.parse(localStorage.getItem('recipes')) || [];

//create even handler that adds to our grocery list
const addItem = (e) => {
    e.preventDefault();
    let input = document.querySelector("input[name='add-grocery']") //add-grocery is the name defined in HTML
    let value = input.value;
    const item = {value}; //if key and value have the same naame... we can just use the variable name once {value: value}
    lsItems.push(item);
    localStorage.setItem('items', JSON.stringify(lsItems));
    uupdateList();
    groceryForm.reset();
}

//create action to render grocery list items
const updateList = () => {
    //method 1: using string html elemet
    // groceries.innerHTML = lsItems.map((item) => {
    //     return `<li>${item.value}</li>`;
    // }).join(" ");

    //method 2: using document.createElement
    if (!groceries.hasChildNodes()) {
        lsItems.map((item) => {
            let li = document.createElement('li')
            li.innerText = item.value;
            groceries.appendChild(li);
        })
    } else {
        let li = document.createElement('li')
        li.innerText = lsItems[lsItems.length - 1].value;
        groceries.appendChild(li);
    }
}

//create event handler to cross out list items on click
const markAsDone = (e) => {
    e.preventDefault();
    // e.stopPropagation();
    let ele = e.target;
    ele.classList.toggle('done');

}

//add event listener to on submit for form to process add item
groceryForm.addEventListener("submit", addItem)

//add event listener to cross out a list item
groceries.addEventListener('click', markAsDone)

//call our methods to populate DOM
updateList();

//create event handler that adds to our recipes list
const addRecipe = (e) => {
    e.preventDefault();
    let recipeText = e.target.innerText;
    lsRecipes.push({recipeText});
    localStorage.setItem('recipes', JSON.stringify(lsRecipes))
    updateWeeklyRecipe();
}

recipeList.addEventListener('click', (e) => {
    e.preventDefault();
    let txt = e.target.innerText;
    window.location.hash = txt.trim();
})



updateWeeklyRecipe();

