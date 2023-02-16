function dataSave(key, data) {
  localStorage.setItem(key, JSON.stringify(data));

}
function dataGet(key) {
  return JSON.parse(localStorage.getItem(key));

}

function getElement(id) {
  return document.getElementById(id);
}

function createElement(tag) {
  return document.createElement(tag);
}

window.addEventListener("load", function () {

  let myRecipe = dataGet("accounts").find((account) => account.email === dataGet("logAccount"));
  if (dataGet("recipes") !== null) {

    recipeArray = dataGet("recipes");
  } else {
    dataSave("recipes", recipeArray);
  }

  if (myRecipe.recipes.length !== 0) {
    myRecipe.recipes.forEach(function (recipe) {
      let recipeName = recipe.recipename;
      // let recipeDescription = recipe.recipedescription;
      // let recipeIngredients = recipe.recipeingredients;
      // let recipeInstruction = recipe.recipeinstruction;
      let recipeImage = recipe.recipeimage;

      itemfield = getElement("myRecipe");
      card = createElement("div");
      card.className = "myRecipeCards";
      card.onclick = function () {

        dataSave("viewrecipe", recipe);
        window.location.href = "recipe.html";

      }
      itemfield.appendChild(card);

      cardImage = createElement("img");
      cardImage.src = recipeImage;

      card2 = createElement("div");
      card2.className = "myRecipeTitle";
      card.appendChild(cardImage);
      card.appendChild(card2);

      cardName = createElement("h4");


      cardStyle = createElement("b");
      cardStyle.innerHTML = recipeName;

      card2.appendChild(cardName);
      cardName.appendChild(cardStyle);


    });
  }




});

function logout() {
  localStorage.removeItem("logAccount");
  window.location.href = "login.html";
}