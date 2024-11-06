import "../CSS/style.css";
import { albums } from "./array.js";
function cardAdder() {
  albums.forEach((album) =>
    document
      .querySelector(".card-container")
      .insertAdjacentHTML(
        "beforeEnd",
        `<div class="card"><h2 class="card-header">${album.name}</h2><img src=${album.cover} class="card-image"><p class="card-artist">${album.artist}</p><p class="card-genre">${album.genre}</p><p class="card-date">${album.releaseDate}</p><p class="card-length">${album.albumLength}</p><p class="card-amount">${album.albumAmount}</p></div>`
      )
  );
}
cardAdder();
