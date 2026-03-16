window.onload = function () {
  let button = document.getElementById("generate-btn");
  let main = document.getElementById("main");
  let newCharacter = new Character();
  console.log(newCharacter);
  button.addEventListener("click", () => {
    location.reload();
  });

  let infos = document.getElementById("infos");
  let extrasElement = document.getElementById("extras");
  let limitesElement = document.getElementById("limites");

  let displayExtrasBtn = document.getElementById("display-extras-btn");
  let displayLimitesBtn = document.getElementById("display-limites-btn");
  let displayCharacterBtn = document.getElementById("display-character-btn");

  displayExtrasBtn.addEventListener("click", () => {
    console.log("display extras");
    display(extras, extrasElement);
  });
  displayLimitesBtn.addEventListener("click", () => {
    display(limites, limitesElement);
  });
  displayCharacterBtn.addEventListener("click", displayCharacter);


  function display(object, element, hide = true) {
    if (hide) {
      hideAllElements();
    }
    element.style.display = "block";
    for (const [key, value] of Object.entries(object)) {
        console.log(key, value);
      if (typeof value === "object") {
        //     display(value)
        //    infos.innerHTML += `<p>${value.name}: ${value.level}</p>`
      } else if (typeof value === "string" || typeof value === "number") {
        element.innerHTML += `<p>${key}: ${value}</p>`;
      }

      // console.log(`${key}: ${value}`);
    }
  }
  function hideAllElements() {
    extrasElement.style.display = "none";
    limitesElement.style.display = "none";
    infos.style.display = "none";
    limitesElement.innerHTML = "";
    infos.innerHTML = "";
  }
  function displayCharacter() {
    infos.style.display = "block";
    display(newCharacter, infos);
    infos.innerHTML += "<h3>attributs</h3>";
    newCharacter.attributes.forEach(
      (value) => (infos.innerHTML += `<p>${value.name}: ${value.level}</p>`),
    );
    infos.innerHTML += "<h3>Pouvoirs</h3>";
    newCharacter.powers.forEach(
      (value) => (infos.innerHTML += `<p>${value.name}: ${value.level}</p>`),
    );
    infos.innerHTML += "<h3>origine:</h3>";
    display(newCharacter.origin, infos, false);
    infos.innerHTML += "<h3>Spécialités:</h3>";

    newCharacter.specialities.forEach(
      (value) => (infos.innerHTML += `<p>${value}</p>`),
    );
  }
};
