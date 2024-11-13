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
    .querySelector(".sort-button-genre")
    .addEventListener("click", function (event) {
      document.querySelector(".card-container").innerHTML = "";
      let selectedGenre = event.target.value;
      console.log(selectedGenre);
      newArray = Object.values(array).filter(
        (album) => album.genre === selectedGenre
      );
      cardAdder(newArray);
    });
  document
    .querySelector(".sort-button-date")
    .addEventListener("click", function (event) {
      document.querySelector(".card-container").innerHTML = "";
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
  document
    .querySelector(".sort-button-length")
    .addEventListener("click", function (event) {
      document.querySelector(".card-container").innerHTML = "";
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
cardAdder(albums);
sortButtons(albums);
