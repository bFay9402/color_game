const tile = document.querySelectorAll('.col');
const colorHeading = document.querySelector('.rand-color');

setupTiles();

function randomColorBuilder() {
  let r = Math.floor(Math.random() * 255) + 1;
  let g = Math.floor(Math.random() * 255) + 1;
  let b = Math.floor(Math.random() * 255) + 1;
  return `rgb(${r}, ${g}, ${b})`;
}

function setupTiles() {
  let colors = [];
  let randNum = Math.floor(Math.random() * 6) + 1;
  let pickedColor;
  for(let i = 0; i < tile.length; i++) {
    tile[i].style.background = randomColorBuilder();
    colors.push(tile[i].style.background);
  }
  pickedColor = tile[randNum].style.background;
  colorHeading.textContent = tile[randNum].style.background;
}