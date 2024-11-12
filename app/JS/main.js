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
      let category = event.target.className;
      console.log(category);
      if (!(category === "sort-button-range" || category === "sort-button")) {
        document.querySelector(".card-container").innerHTML = "";
        let selectedValueRange = event.target.value;
        let rangeList = [];
        let rangeSplit = selectedValueRange.split("-");
        rangeList.push(rangeSplit);
        console.log(rangeList);
        let rangeBottom = rangeList[0];
        let rangeTop = rangeList[1];
        newArray = Object.values(array).filter(
          (album) => album.category >= rangeBottom || album.x <= rangeTop
        );
        cardAdder(newArray);
      }
    });
}
cardAdder(albums);
sortButtons(albums);
