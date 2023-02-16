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

  let answer = document.querySelectorAll(".buttonanswer");

  let button1 = answer[0];
  let button2 = answer[1];
  let timer;
  button1.addEventListener("click", function () {
    if (!timer) {
      if (dataGet("logAccount") !== null) {
        myaccount = dataGet("logAccount");
        let resultarray = [];
        let objresult = {};

        if (dataGet("result") !== null) {
          resultarray = dataGet("result");

        }
        let userExist = resultarray.find(acct => acct.email === dataGet("logAccount"));

        if (!userExist) {
          objresult.email = dataGet("logAccount");
          objresult.result = "yes";
          resultarray.push(objresult);
          dataSave("result", resultarray);

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
          alertmodal.textContent = "You have submitted your response";
          maincontainer.prepend(alertcontainer);


          alertcontainer.append(alertmodal);





        }
        timer = setTimeout(function () {

          timer = null;
          window.location.href = "index.html";
        }, 3000);
      }
    }

  });

  button2.addEventListener("click", function () {
    if (!timer) {
      if (dataGet("logAccount") !== null) {
        myaccount = dataGet("logAccount");
        let resultarray = [];
        let objresult = {};

        if (dataGet("result") !== null) {
          resultarray = dataGet("result");

        }
        let userExist = resultarray.find(acct => acct.email === dataGet("logAccount"));

        if (!userExist) {
          objresult.email = dataGet("logAccount");
          objresult.result = "no";
          resultarray.push(objresult);
          dataSave("result", resultarray);

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
          alertmodal.textContent = "You have submitted your response";
          maincontainer.prepend(alertcontainer);


          alertcontainer.append(alertmodal);





        }
        timer = setTimeout(function () {

          timer = null;
          window.location.href = "index.html";
        }, 3000);
      }
    }

  });
});
