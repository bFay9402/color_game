const tile = document.querySelectorAll('.col');
const colorHeading = document.querySelector('.rand-color');

function randomColorBuilder() {
  let r = Math.floor(Math.random() * 255) + 1;
  let g = Math.floor(Math.random() * 255) + 1;
  let b = Math.floor(Math.random() * 255) + 1;
  return `rbg(${r}, ${g}, ${b})`;
}
let color = randomColorBuilder();
console.log(color);
colorHeading.textContent = color;
tile[3].style.background = color;