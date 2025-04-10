//DOM SELECTORS
const container = document.getElementById("recipeContainer")
const searchField = document.getElementById("siteSearch")
const cookingTime = document.getElementById("cookingTime")

const recipies = ["SPAGHETTI", "PIZZA", "BURGER", "SANDWICH", "TACOS", "SALAD"]
const recipeData = [
  {
    recipe: {
      label: "Spaghetti",
      image: "spaghetti.jpg",
      totalTime: 30,
      url: "https://example.com/spaghetti",
      healthLabels: ["Vegetarian", "Low Carb", "High Protein"],
    },
  },
  {
    recipe: {
      label: "Pizza",
      image: "pizza.jpg",
      totalTime: 45,
      url: "https://example.com/pizza",
      healthLabels: ["Vegetarian", "Gluten Free", "Low Carb"],
    },
  },
]

const inIt = () => {
  console.log("inIt")

  container.innerHTML = ''
  recipeData.forEach((recipe) => {
    container.innerHTML += `
      <div class="recipe-cards">
       <img src="${recipe.recipe.image}" />
        <p class="recipe-card-label">${recipe.recipe.label}</p>
        <div class="recipe-time">
         <p> <img src="clock-icon.png" class="clock-icon"/> ${recipe.recipe.totalTime} minutes</p>
         </div>
        <p><a href="${recipe.recipe.url}" target="_blank" rel="noopener noreferrer">Check it out</a></p>
        <div class="health-labels">
          <button>
          ${recipe.recipe.healthLabels[0]}
          </button>
          <button>
          ${recipe.recipe.healthLabels[1]}
          </button>
          <button>
          ${recipe.recipe.healthLabels[2]}
          </button>
        </div>
      </div>`
  })
}

const onSearch = (event) => {
  console.log("onSearch", event)
}

const onSelect = (event) => {
  console.log("onSelect", event)
}

inIt()

//EVENTLISTENERS
searchField.addEventListener('keydown', onSearch)
cookingTime.addEventListener('change', onSelect)