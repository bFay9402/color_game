const container = document.querySelector('.container');
container.style.background = `rgb(${random()}, ${random()}, ${random()})`

function random() {
  let rng = Math.floor(Math.random() * 255) + 1;
  return rng;
}