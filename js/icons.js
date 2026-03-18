window.onload = function () {
  let button = document.getElementById("generate-btn");
  let main = document.getElementById("main");
  let newCharacter = new Character();
  button.addEventListener("click", () => {
    location.reload();
  });

  let infos = document.getElementById("infos");
  let extrasElement = document.getElementById("extras");
  let limitesElement = document.getElementById("limites");
  let specialitesElement = document.getElementById("specialites");
  
  let displayExtrasBtn = document.getElementById("display-extras-btn");
  let displayLimitesBtn = document.getElementById("display-limites-btn");
  let displayCharacterBtn = document.getElementById("display-character-btn");
  let displaySpecialitesBtn = document.getElementById("display-specialites-btn");
  displayCharacter();

  displayExtrasBtn.addEventListener("click", () => {
    display(extras, extrasElement);
  });
  displayLimitesBtn.addEventListener("click", () => {
    display(limites, limitesElement);
  });
  displaySpecialitesBtn.addEventListener("click", () => {
    display(specialites, specialitesElement);
  });
  displayCharacterBtn.addEventListener("click", displayCharacter);
  function display(object, element, hide = true) {
    if (hide) {
      hideAllElements();
    }
    element.style.display = "block";
    for (const [key, value] of Object.entries(object)) {
      if (typeof value === "object") {
        if (value.name && value.value) {
          element.innerHTML += formatElement(value.name, value.value);
        }
      } else if (typeof value === "string" || typeof value === "number") {
        element.innerHTML += formatElement(key, value);
      }

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
      (value) => (infos.innerHTML += `<p>${value.name}: ${value.level} </p>`),
    );
    infos.innerHTML += "<h3>Pouvoirs</h3>";
    newCharacter.powers.forEach(
      (value) => {
        $html = `<p>${value.name}: ${value.level}`;
        if (value.page) {
          $html += `<span class="page"> (p${value.page})</span>`;
        }
        $html += "</p>";
        infos.innerHTML += $html;
      },
    );
    infos.innerHTML += "<h3>origine:</h3>";
    display(newCharacter.origin, infos, false);
    infos.innerHTML += "<h3>Spécialités:</h3>";

    newCharacter.specialities.forEach(
      (value) => (infos.innerHTML += `<p>${value}</p>`),
    );
  }

  function formatElement(title, descripion) {
    return `<p><strong>${title}</strong>: ${descripion}</p>`;
  }
};
