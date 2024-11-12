import "../CSS/style.css";
import { albums } from "./array.js";
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
function sortButtonsRange(category, range1, range2, array) {
  x = category;
  document.querySelector(".card-container").innerHTML = "";
  array.filter((album) => album.x >= range1 || album.x <= range2);
  return album;
}
document.querySelector(".sort-button-range");
cardAdder(albums);
