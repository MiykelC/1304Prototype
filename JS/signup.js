function dataSave(key, data) {
  localStorage.setItem(key, JSON.stringify(data));

}
function dataGet(key) {
  return JSON.parse(localStorage.getItem(key));

}

function getElement(id) {
  return document.getElementById(id);
}

function signup() {
  let accountsArray = [];

  if (dataGet("accounts") !== null) {
    accountsArray = dataGet("accounts");

  }
  let objAccount = {};

  let email = getElement("email").value;
  let confirmemail = getElement("confirmemail").value;
  let password = getElement("password").value;
  let confirmPassword = getElement("confirmpassword").value;
  let userExist = accountsArray.some(acct => acct.email === email);

  if (userExist) {
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
    alertmodal.textContent = "Email already exist";
    maincontainer.prepend(alertcontainer);


    alertcontainer.append(alertmodal);

  }


  else if (email !== confirmemail || email.trim() === "" || confirmemail.trim() === "" || password !== confirmPassword || password.trim() === "" || confirmPassword.trim() === "") {

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
    alertmodal.textContent = "Email and Password is required";
    maincontainer.prepend(alertcontainer);


    alertcontainer.append(alertmodal);




    return;

  } else {
    if (getElement("alert container")) {
      getElement("alert container").remove();
    }


    maincontainer = getElement("inputadd");
    alertcontainer = document.createElement("div");
    alertcontainer.id = "alert container";
    alertcontainer.className = "alertcontainer";
    alertmodal = document.createElement("div");
    alertmodal.id = "alerts";
    alertmodal.className = "alert alert-success";
    alertmodal.textContent = "Account created redirecting to Login Page";
    maincontainer.prepend(alertcontainer);


    alertcontainer.append(alertmodal);

    objAccount.email = getElement("email").value;
    objAccount.password = getElement("password").value;
    objAccount.recipes = [];
    objAccount.members= [];


    accountsArray.push(objAccount);
    dataSave("accounts", accountsArray);
    setTimeout(function () {
      window.location.href = "login.html";
    }, 2000);

  }

}
function logout() {
  localStorage.removeItem("logAccount");
  window.location.href = "login.html";
}
