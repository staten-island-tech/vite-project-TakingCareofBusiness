import "../CSS/style.css";
import { albums } from "./array.js";
let newArray;
function cardAdder(array) {
  array.forEach((album) =>
    document
      .querySelector(".card-container")
      .insertAdjacentHTML(
        "beforeEnd",
        `<div class="card"><div class="header-container"><h2>${album.name}</h2></div><img src=${album.cover} class="card-image"><div class="info-container"><p class="card-artist">${album.artist}</p><p class="card-genre">Genre: ${album.genre}</p><p class="card-date"> Date Released: ${album.releaseDate}</p><p class="card-length"> Album Length: ${album.albumLength} minutes</p><p class="card-amount">Number of Songs: ${album.albumAmount}</p></div></div>`
      )
  );
}
function sortButtons(array) {
  document
    .querySelector(".sort-button-range")
    .addEventListener("click", function (event) {
      document.querySelector(".card-container").innerHTML = "";
      let selectedValueRange = event.target.value;
      newArray = Object.values(array).filter(
        (album) => album.genre === selectedValueRange
      );
    });
  document
    .querySelector(".sort-button-range")
    .addEventListener("click", function (event) {
      let typeThing = event.target.tagName;
      console.log(typeThing);
      let category = event.target.className;
      if (!(typeThing == "SELECT")) {
        document.querySelector(".card-container").innerHTML = "";
        let selectedValueRange = event.target.value;
        let rangeSplit = selectedValueRange.split("-");
        console.log(rangeSplit);
        let rangeBottom = rangeSplit[0];
        let rangeTop = rangeSplit[1];
        if (category === "releaseDate") {
          newArray = Object.values(array).filter(
            (album) =>
              album.releaseDate >= rangeBottom && album.releaseDate <= rangeTop
          );
        }
        if (category === "albumLength") {
          newArray = Object.values(array).filter(
            (album) =>
              album.albumLength >= rangeBottom && album.albumLength <= rangeTop
          );
        }
        console.log(newArray);
        cardAdder(newArray);
      }
    });
}
cardAdder(albums);
sortButtons(albums);
