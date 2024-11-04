import "../CSS/style.css";
import { albums } from "./array/js";
function cardAdder() {
  albums.forEach((album) =>
    document
      .querySelector(".card-container")
      .insertAdjacentHTML(
        "beforeEnd",
        `<div class="card"><h2 class="card-header">${album.name}</h2><img src=${currentPikminType} class="card-image"><p class="card-description">${currentPikminDescription}</p><button class="delete-card" id="remove-button-${idNumber}"><img src="Bulborb.png" class="remove-button-image"></button></div>`
      )
  );
}
