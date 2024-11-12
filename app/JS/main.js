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
function sortButtons() {
  document
    .querySelector(".sort-button-range")
    .addEventListener("click", function (event) {
      document.querySelector(".card-container").innerHTML = "";
      let selectedValueRange = event.target.value;
      let rangeList = [];
      let rangeSplit = selectedValueRange.split("-");
      rangeList.push(rangeSplit);
      print(rangeList);
      let rangeBottom = rangeList[0];
      let rangeTop = rangeList[1];
      let returnList = [selectedValueRange, rangeBottom, rangeTop];
      return returnList;
    });
}
function newCardsRange(list) {
  newArray = Object.values(array).filter(
    (album) => album.x >= range1 || album.x <= range2
  );
  return newArray;
}
function sortButtonsSelect(modArray) {
  document
    .querySelector(".sort-button-range")
    .addEventListener("click", function () {
      cardAdder(modArray);
    });
}

cardAdder(albums);
sortButtonsSelect(sortButtonsRange());
