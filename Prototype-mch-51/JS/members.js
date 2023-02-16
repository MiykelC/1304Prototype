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

  let accountsArray = [];
  if (dataGet("accounts") !== null) {
    accountsArray = dataGet("accounts");
  }

  let userExist = accountsArray.find(acct => acct.email === dataGet("logAccount"));
  if (userExist) {
    if (userExist.members.length !== 0) {
      userExist.members.forEach((member) => {
        console.log(member)
        let container = getElement("membersdiv");
        let mem = createElement("p");
        mem.innerHTML = member;
        container.append(mem);

      })
    }
  }

});
function addmembers() {
  let accountsArray = [];
  if (dataGet("accounts") !== null) {
    accountsArray = dataGet("accounts");
  }
  let userExist = accountsArray.find(acct => acct.email === dataGet("logAccount"));
  if (userExist) {

    let memberAdd = getElement("input").value;
    let friends = accountsArray.find(acct => acct.email === memberAdd);


    if (friends !== undefined && !userExist.members.includes(friends.email) && friends.email !== userExist.email) {
      userExist.members.push(memberAdd);
      dataSave("accounts", accountsArray);
      if (userExist.members.length !== 0) {
        userExist.members.forEach((member) => {
          let memberEmail = member;
          let container = getElement("membersdiv");
          let mem = createElement("p");
          mem.innerHTML = memberEmail;
          container.append(mem);
      
        })
        if (getElement("alert container")) {
          getElement("alert container").remove();
        }
      } 


    } 
    else {
      if (getElement("alert container")) {
        getElement("alert container").remove();
      }

      maincontainer = getElement("members");
      alertcontainer = document.createElement("div");
      alertcontainer.id = "alert container";
      alertcontainer.className = "alertcontainer";
      alertmodal = document.createElement("div");
      alertmodal.id = "alerts";
      alertmodal.className = "alert alert-danger";
      alertmodal.textContent = "The person cannot be added ";
      maincontainer.prepend(alertcontainer);


      alertcontainer.append(alertmodal);

      return
    }
  }
}



