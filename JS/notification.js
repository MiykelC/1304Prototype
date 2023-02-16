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

  if (dataGet("notifyrecipe") !== null) {
    recipe = dataGet("notifyrecipe");


    let recipeName = recipe.recipename;
    let recipeDescription = recipe.recipedescription;
    let recipeIngredients = recipe.recipeingredients;
    let recipeInstruction = recipe.recipeinstruction;
    let recipeImage = recipe.recipeimage;

    let recipename = getElement("recipeName");

    recipename.innerHTML = recipeName;
    let desc = getElement("description");
    let desc2 = createElement("p");
    desc2.innerHTML = recipeDescription;
    desc.appendChild(desc2);


    let ingred = getElement("ingredients");
    let ingred2 = createElement("p");
    ingred2.innerHTML = recipeIngredients;
    ingred.appendChild(ingred2);

    let instruct = getElement("instructions");
    let instruct2 = createElement("p");
    instruct2.innerHTML = recipeInstruction;
    instruct.appendChild(instruct2);

    let img = getElement("displayimg");
    img.src = recipeImage;



  }


});


function logout() {
  localStorage.removeItem("logAccount");
  window.location.href = "login.html";
}