function dataSave(key, data) {
  localStorage.setItem(key, JSON.stringify(data));

}
function dataGet(key) {
  return JSON.parse(localStorage.getItem(key));

}

function getElement(id) {
  return document.getElementById(id);
}

function addrecipe() {
  let recipeArray = [];
  var myaccount = [];
  if (dataGet("accounts") !== null) {
    myaccount = dataGet("accounts");
  }

  if (dataGet("recipes") !== null) {
    recipeArray = dataGet("recipes");

  }
  let objrecipe = {};

  let recipename = getElement("recipename").value;
  let recipedescription = getElement("recipedescription").value;
  let recipeingredients = getElement("recipeingredients").value;
  let recipeinstruction = getElement("recipeinstructions").value;
  let recipeimage = getElement("addImg").value;

  if (recipename.trim() === "" || recipedescription.trim() === "" || recipeingredients.trim() === "" || recipeinstruction.trim() === "" || recipeimage.trim() === "") {

    if (getElement("alert container")) {
      getElement("alert container").remove();
    }


    maincontainer = getElement("inputadd");
    alertcontainer = document.createElement("div");
    alertcontainer.id = "alert container";
    alertcontainer.className = "alertcontainer";
    alertmodal = document.createElement("div");
    alertmodal.id = "alerts";
    alertmodal.className = "alert alert-danger";
    alertmodal.textContent = "Please fill all the fields";
    maincontainer.prepend(alertcontainer);


    alertcontainer.append(alertmodal);




    return;

  } else {

    if (getElement("alert container")) {

      getElement("alert container").remove();
    }
    // if (dataGet("logAccount") === null) {
    //   window.location.href = "login.html";
    // } 
    
    // var myaccount = dataGet("accounts").find((account) => account.email === dataGet("logAccount"));

    maincontainer = getElement("inputadd");
    alertcontainer = document.createElement("div");
    alertcontainer.id = "alert container";
    alertcontainer.className = "alertcontainer";
    alertmodal = document.createElement("div");
    alertmodal.id = "alerts";
    alertmodal.className = "alert alert-success";
    alertmodal.textContent = "Recipe created redirecting to My recipe page";
    maincontainer.prepend(alertcontainer);
  

    alertcontainer.append(alertmodal);
    objrecipe.id = Math.random();
    objrecipe.recipename = recipename;
    objrecipe.recipedescription = recipedescription;
    objrecipe.recipeingredients = recipeingredients;
    objrecipe.recipeinstruction = recipeinstruction;
    objrecipe.recipeimage = "/FOODimages/taco.jpg";

    recipeArray.push(objrecipe);
    dataSave("recipes", recipeArray);

    user = myaccount.find((account) => account.email === dataGet("logAccount"));
    


    user.recipes.push(objrecipe);
    dataSave("accounts", myaccount);


    setTimeout(function () {
      window.location.href = "myRecipe.html";
     }, 2000);

  }

}
function logout() {
  localStorage.removeItem("logAccount");
  window.location.href = "login.html";
}