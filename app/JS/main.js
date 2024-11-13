import "../CSS/style.css";
import { albums } from "./array.js";
import { DOMSelectors } from "./DOMSelectors.js";
let newArray;
function cardAdder(array) {
  array.forEach((album) =>
    DOMSelectors.cardContainer.insertAdjacentHTML(
      "beforeEnd",
      `<div class="card"><div class="header-container"><h2>${album.name}</h2></div><img src=${album.cover} alt=" class="card-image"><div class="info-container"><p class="card-artist">${album.artist}</p><p class="card-genre">Genre: ${album.genre}</p><p class="card-date"> Date Released: ${album.releaseDate}</p><p class="card-length"> Album Length: ${album.albumLength} minutes</p><p class="card-amount">Number of Songs: ${album.albumAmount}</p></div></div>`
    )
  );
}
function sortButtons(array) {
  DOMSelectors.genreButton.addEventListener("click", function (event) {
    DOMSelectors.cardContainer.innerHTML = "";
    let selectedGenre = event.target.value;
    newArray = Object.values(array).filter((album) =>
      album.genre.includes(selectedGenre)
    );
    cardAdder(newArray);
  });
  DOMSelectors.dateButton.addEventListener("click", function (event) {
    DOMSelectors.cardContainer.innerHTML = "";
    let selectedValueRange = event.target.value;
    let rangeSplit = selectedValueRange.split("-");
    let rangeBottom = rangeSplit[0];
    let rangeTop = rangeSplit[1];
    newArray = Object.values(array).filter(
      (album) =>
        album.releaseDate >= rangeBottom && album.releaseDate <= rangeTop
    );
    cardAdder(newArray);
  });
  DOMSelectors.lengthButton.addEventListener("click", function (event) {
    DOMSelectors.cardContainer.innerHTML = "";
    let selectedLengthRange = event.target.value;
    let rangeSplit = selectedLengthRange.split("-");
    let lengthBottom = rangeSplit[0];
    let lengthTop = rangeSplit[1];
    newArray = Object.values(array).filter(
      (album) =>
        album.albumLength >= lengthBottom && album.albumLength <= lengthTop
    );
    cardAdder(newArray);
  });
}
function changeBackground() {
  DOMSelectors.buttonContainer.addEventListener("click", function (event) {
    let buttonType = event.target.id;
    if (buttonType === "Spotify-button") {
      document.body.classList.add("Spotify");
      document.body.classList.remove("normal");
      document.body.classList.remove("Apple");
    }
    if (buttonType === "Apple-button") {
      document.body.classList.add("Apple");
      document.body.classList.remove("normal");
      document.body.classList.remove("Spotify");
    }
  });
}
function reset() {
  DOMSelectors.resetContainer.addEventListener("click", function (event) {
    let buttonType = event.target.id;
    if (buttonType === "theme-reset") {
      document.body.classList.add("normal");
      document.body.classList.remove("Spotify");
      document.body.classList.remove("Apple");
    }
    if (buttonType === "card-reset") {
      DOMSelectors.cardContainer.innerHTML = "";
      cardAdder(albums);
    }
  });
}
cardAdder(albums);
sortButtons(albums);
changeBackground();
reset();
