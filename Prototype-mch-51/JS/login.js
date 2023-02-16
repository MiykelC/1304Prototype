function dataSave(key, data) {
  localStorage.setItem(key, JSON.stringify(data));

}
function dataGet(key) {
  return JSON.parse(localStorage.getItem(key));

}

function getElement(id) {
  return document.getElementById(id);
}
window.addEventListener("load", function () {
  let objAdmin = {
    email: "admin@gmail.com",
    password: "123",
    recipes:[],
    members:[]
  };

  let accountsArray = [];

  if (dataGet("accounts") !== null) {
    accountsArray = dataGet("accounts");

  }
  let userExist = accountsArray.some(acct => acct.email === "admin@gmail.com");

  if (userExist) {
    return 
  }

  
  accountsArray.push(objAdmin);
  dataSave("accounts", accountsArray);
});

function login() {
  if (dataGet("accounts") !== null) {
    let accountsArray = dataGet("accounts");
    let email = getElement("email").value;
    let password = getElement("password").value;
    let userExist = accountsArray.some(acct => acct.email === email && acct.password === password);
    console.log("userExist", userExist)

    if (userExist) {
      let objAccount = {};
      objAccount.email = getElement("email").value;
      objAccount.password = getElement("password").value;

      logAccount = dataSave("logAccount", email);
     
        window.location.href = "index.html";

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
      alertmodal.className = "alert alert-danger";
      alertmodal.textContent = "Email or password is incorrect";
      maincontainer.prepend(alertcontainer);


      alertcontainer.append(alertmodal);
    }
  }
}
function logout() {
  localStorage.removeItem("logAccount");
  window.location.href = "login.html";
}
