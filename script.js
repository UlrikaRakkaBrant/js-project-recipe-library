//DOM SELECTORS
const container = document.getElementById("recipeContainer")
const searchField = document.getElementById("siteSearch")
const cookingTime = document.getElementById("cookingTime")

const apiKey = "6c307cd5c39f477b909ae0c07f6c06ca"

const endPoint = `https://api.spoonacular.com/recipes/random?number=100&apiKey=${apiKey}`

const init = async () => {
  const response = await fetchRecipes(endPoint)
  renderRecipes(response.recipes)
}

const fetchRecipes = async (url) => {
  try {
    const response = await fetch(url)
    const json = await response.json()
    return json
  }
  catch (error) { console.log(error) }
  return { recipes: [] }
}

const renderRecipes = (recipes) => {
  container.innerHTML = ''
  recipes.forEach((recipe) => {
    container.innerHTML += `
      <div class="recipe-cards">
       <img src="${recipe.image}" />
        <p class="recipe-card-label">${recipe.title}</p>
        <div class="recipe-time">
         <p> <img src="clock-icon.png" class="clock-icon"/> ${recipe.readyInMinutes} minutes</p>
         </div>
        <p><a href="${recipe.sourceUrl}" target="_blank" rel="noopener noreferrer">Check it out</a></p>
      </div>`
  })
}

const onSearch = async (event) => {
  console.log("onSearch", event, searchField)

  const endPoint2 = `https://api.spoonacular.com/recipes/random?number=${event.key}&apiKey=${apiKey}`
  const response = await fetchRecipes(endPoint2)
  renderRecipes(response.recipes)
}

const onSelect = (event) => {
  console.log("onSelect", event)
}

init()

//EVENTLISTENERS
searchField.addEventListener('keydown', onSearch)
cookingTime.addEventListener('change', onSelect)