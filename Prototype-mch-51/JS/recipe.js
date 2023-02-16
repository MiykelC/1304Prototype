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

  if (dataGet("viewrecipe") !== null) {
    recipe = dataGet("viewrecipe");


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
  let result = [];
  if (dataGet("accounts") !== null) {
    let accountsArray = dataGet("accounts");
    let userExist = accountsArray.find(acct => acct.email === dataGet("logAccount"));
    if (dataGet("result") !== null) {
      result = dataGet("result");

    }
    console.log(userExist.members.length);
    console.log(result.length);
    if (userExist.members.length === result.length) {
      this.localStorage.removeItem("result");
    }

  }


});

function backtohome() {
  window.location.href = "index.html";
}

function notify() {
  let accountsArray = [];

  if (dataGet("accounts") !== null) {
    accountsArray = dataGet("accounts");

  }
  let userExist = accountsArray.find(acct => acct.email === dataGet("logAccount"));
  if (userExist.members.length !== 0) {
    dataSave("notify", userExist.members);
    dataSave("notifyrecipe", dataGet("viewrecipe"));
    if (getElement("alert container")) {
      getElement("alert container").remove();
    }


    maincontainer = getElement("notifyalert");
    alertcontainer = document.createElement("div");
    alertcontainer.id = "alert container";
    alertcontainer.className = "alertcontainer";
    alertmodal = document.createElement("div");
    alertmodal.id = "alerts";
    alertmodal.className = "alert alert-success";
    alertmodal.textContent = "You have notified the members from your list";
    maincontainer.prepend(alertcontainer);


    alertcontainer.append(alertmodal);
  }


}




function logout() {
  localStorage.removeItem("logAccount");
  window.location.href = "login.html";
}