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
  // if (dataGet("accounts") !== null) {
  //   // accountsArray = dataGet("accounts");
  // }
  let notifyuser = [];
  let result = [];
  if (dataGet("notify") !== null) {

    notifyuser = dataGet("notify");
    if (dataGet("result") !== null) {
      result = dataGet("result");

    }
    let notifyin = notifyuser.find(notify => notify === dataGet("logAccount"));
    let notifyin2 = result.find(res => res.email === dataGet("logAccount"));
    console.log(notifyin2)

    if (notifyin !== undefined && notifyin2 === undefined) {

    
      let container = getElement("searchlabel");
      let notify = createElement("div");
      notify.className = "notify";
      notify.id = "notify";
      notify.innerHTML = "You have a new notification";

      let notifylink = createElement("a");
      notifylink.className = "notifylink";
      notifylink.id = "notifylink";
      notifylink.innerHTML = " Click here";
      notifylink.href = "notification.html";

      container.append(notify);

      notify.append(notifylink);




    }


  }

  let userExist = result.find(acct => acct.email === dataGet("logAccount"));
  if (dataGet("result") !== null && !userExist) {
    let notifyrecipe; 
    let resultcount = result.reduce((acc, curr) => {
      if (curr.result === "yes") {
        acc.yes++;
      } else {
        acc.no++;
      }
      return acc;
    }, { yes: 0, no: 0 });

    if (dataGet("notifyrecipe") !== null) {
      notifyrecipe = dataGet("notifyrecipe");

    }

    let container = getElement("searchlabel");
    let notify2 = createElement("div");
    notify2.className = "notify2";
    notify2.id = "notify2";
    notify2.innerHTML = `There are ${resultcount.yes} that agree and ${resultcount.no} that disagree with your suggestion.`;
    

    let notifylink2 = createElement("a");
    notifylink2.className = "notifylink2";
    notifylink2.id = "notifylink2";
    notifylink2.innerHTML = ` ${notifyrecipe.recipename}`;
    notifylink2.href = "recipe.html";

    container.append(notify2);

    notify2.append(notifylink2);



  }






  if (dataGet("recipes") === null) {
    var recipeArray = [
      {
        id: 1,
        recipename: "Chicken Adobo",
        recipedescription: "Chicken Adobo is a Filipino dish of chicken braised in vinegar, soy sauce, garlic, and black peppercorns. It is one of the most popular dishes in the Philippines and is often served with steamed rice.",
        recipeingredients: "1 whole chicken, cut into serving pieces\n" +
          "1/2 cup soy sauce\n" +
          "1/2 cup vinegar\n" +
          "1/2 cup water\n" +
          "1/2 cup brown sugar\n" +
          "1/2 cup cooking oil\n" +
          "1/2 cup garlic, minced\n" +
          "1/2 cup onion, minced\n" +
          "1/2 cup bay leaves\n" +
          "1/2 cup black peppercorns\n" +
          "1/2 cup salt",
        recipeinstruction: "In a large bowl, combine the soy sauce, vinegar, water, brown sugar, cooking oil, garlic, onion, bay leaves, black peppercorns, and salt. Stir until the sugar and salt have dissolved.\n" +
          "Place the chicken pieces in a large pot and pour the marinade over the chicken. Bring to a boil over high heat, then reduce the heat to low and simmer for 30 minutes.\n" +
          "Remove the chicken from the pot and set aside. Strain the marinade into a saucepan and bring to a boil. Reduce the heat to low and simmer for 10 minutes, or until the sauce has thickened.\n" +
          "Return the chicken to the pot and simmer for 10 minutes more. Serve hot.",
        recipeimage: "FOODimages/chicken-adobo.jpg"
      },
      {
        id: 2,
        recipename: "Pork Siomai",
        recipedescription: "Pork siomai is a Chinese dumpling made with ground pork, shrimp, and vegetables. It is usually served with a sweet and sour sauce.",
        recipeingredients: "1 pound ground pork\n" +
          "1/2 pound shrimp, peeled and deveined\n" +
          "1/2 cup cabbage, shredded\n" +
          "1/2 cup carrots, shredded\n" +
          "1/2 cup green onions, chopped\n" +
          "1/2 cup soy sauce\n" +
          "1/2 cup water\n" +
          "1/2 cup cornstarch\n" +
          "1/2 cup sesame oil\n" +
          "1/2 cup salt\n" +
          "1/2 cup sugar\n" +
          "1/2 cup garlic, minced\n",
        recipeinstruction: "In a large bowl, combine the ground pork, shrimp, cabbage, carrots, and green onions. Mix well.\n" +
          "In a small bowl, combine the soy sauce, water, cornstarch, sesame oil, salt, sugar, garlic, ginger, green onions, and sesame seeds. Mix well.\n" +
          "Place a heaping tablespoon of the pork mixture in the center of a dumpling wrapper. Fold the wrapper in half and pinch the edges to seal. Repeat with the remaining pork mixture and dumpling wrappers.\n" +
          "Bring a large pot of water to a boil. Add the dumplings and cook for 5 minutes. Remove from the pot and serve hot.",
        recipeimage: "FOODimages/siomai.jpg"
      },
      {
        id: 3,
        recipename: "oreo milkshake",
        recipedescription: "Oreo milkshake is a milkshake made with vanilla ice cream, milk, and Oreo cookies. It is often served with whipped cream and a cherry on top.",
        recipeingredients: "1/2 gallon vanilla ice cream\n" +
          "1/2 gallon milk\n" +
          "1/2 gallon Oreo cookies\n" +
          "1/2 gallon whipped cream\n" +
          "1/2 gallon cherries",
        recipeinstruction: "In a blender, combine the vanilla ice cream, milk, and Oreo cookies. Blend until smooth.\n" +
          "Pour the milkshake into a glass and top with whipped cream and a cherry.",
        recipeimage: "FOODimages/Oreo.jpg"

      },
      {
        id: 4,
        recipename: "pad thai",
        recipedescription: "Pad Thai is a Thai dish of stir-fried rice noodles with eggs, vegetables, and tofu. It is often served with lime wedges and crushed peanuts.",
        recipeingredients: "1 pound rice noodles\n" +
          "1/2 pound eggs\n" +
          "1/2 pound tofu\n" +
          "1/2 pound bean sprouts\n" +
          "1/2 pound green onions\n" +
          "1/2 pound peanuts\n" +
          "1/2 pound lime wedges\n" +
          "1/2 pound fish sauce\n" +
          "1/2 pound sugar\n" +
          "1/2 pound tamarind paste\n" +
          "1/2 pound garlic, minced\n" +
          "1/2 pound ginger, minced\n" +
          "1/2 pound red pepper flakes\n" +
          "1/2 pound salt\n" +
          "1/2 pound sugar\n" +
          "1/2 pound vegetable oil\n",
        recipeinstruction: "In a large pot of boiling water, cook the rice noodles for 3 minutes. Drain and rinse with cold water. Set aside.\n" +
          "In a large bowl, whisk together the fish sauce, sugar, tamarind paste, garlic, ginger, red pepper flakes, salt, and sugar. Set aside.\n" +
          "Heat the vegetable oil in a large skillet over medium-high heat. Add the eggs and scramble until cooked. Remove from the skillet and set aside.\n" +
          "Add the tofu to the skillet and cook until golden brown. Remove from the skillet and set aside.\n" +
          "Add the rice noodles to the skillet and cook until golden brown. Add the fish sauce mixture and cook until the noodles are coated. Add the scrambled eggs, tofu, bean sprouts, and green onions. Cook until heated through.\n" +
          "Serve with lime wedges and crushed peanuts.",
        recipeimage: "FOODimages/pad-thai.jpg"

      },

      {
        id: 5,
        recipename: "Buffalo Chicken Wings",
        recipedescription: "Spicy Buffalo chicken wings are chicken wings coated in a spicy sauce. They are often served with blue cheese dressing.",
        recipeingredients: "1 pound chicken wings\n" +
          "1/2 pound hot sauce\n" +
          "1/2 pound butter\n" +
          "1/2 pound blue cheese dressing\n" +
          "1/2 pound celery sticks\n" +
          "1/2 pound carrots, sliced\n" +
          "1/2 pound salt\n" +
          "1/2 pound pepper\n",
        recipeinstruction: "Preheat the oven to 400 degrees F (200 degrees C).\n" +
          "Place the chicken wings in a large bowl. In a small bowl, combine the hot sauce and butter. Pour the hot sauce mixture over the chicken wings and toss to coat. Arrange the chicken wings in a single layer on a baking sheet.\n" +
          "Bake in the preheated oven until the chicken wings are no longer pink in the center, 30 to 40 minutes. Serve with blue cheese dressing, celery sticks, and carrots.",
        recipeimage: "FOODimages/buffalo-wings.jpg"

      },
      {
        id: 6,
        recipename: "mexican tacos",
        recipedescription: "Mexican tacos are a dish made with tortillas, meat, and vegetables. They are often served with salsa and guacamole.",
        recipeingredients: "1 pound ground beef\n" +
          "1/2 pound tortillas\n" +
          "1/2 pound salsa\n" +
          "1/2 pound guacamole\n" +
          "1/2 pound onions, chopped\n" +
          "1/2 pound tomatoes, chopped\n" +
          "1/2 pound lettuce, chopped\n" +
          "1/2 pound salt\n" +
          "1/2 pound pepper\n",
        recipeinstruction: "In a large skillet, cook the ground beef over medium heat until browned. Drain the grease.\n" +
          "Warm the tortillas according to the package instructions.\n" +
          "To assemble the tacos, place a tortilla on a plate. Top with ground beef, salsa, guacamole, onions, tomatoes, and lettuce. Season with salt and pepper, to taste. Serve immediately.",
        recipeimage: "FOODimages/taco.jpg"
      },
    ];
    dataSave("recipes", recipeArray);
  } else {
    recipeArray = dataGet("recipes")
  }





  if (recipeArray.length > 0) {



    recipeArray.forEach(function (recipe, index) {


      let recipeName = recipe.recipename;
      // let recipeDescription = recipe.recipedescription;
      // let recipeIngredients = recipe.recipeingredients;
      // let recipeInstruction = recipe.recipeinstruction;
      let recipeImage = recipe.recipeimage;
      let recipeId = recipe.id;
      itemfield = getElement("items");
      card = createElement("div");
      card.className = "card";
      card.id = recipeId;
      card.onclick = function () {

        dataSave("viewrecipe", recipe);
        window.location.href = "recipe.html";

      }
      itemfield.appendChild(card);

      cardImage = createElement("img");
      cardImage.src = recipeImage;

      card2 = createElement("div");
      card2.className = "container";
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

function searchbar() {
  let search = getElement("search").value;
  if (dataGet("recipes").length !== 0) {
    recipeArray = dataGet("recipes")

  }

  recipeArray.forEach((recipe) => {
    if (recipe.recipename.toLowerCase().includes(search.toLowerCase())) {
      getElement(recipe.id).style.display = "block";

    } else {
      getElement(recipe.id).style.display = "none";
    }
  });
}





