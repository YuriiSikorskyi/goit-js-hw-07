function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const colorNameEl = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");


btnChangeColor.addEventListener("click", changeColor);

function changeColor() {
  colorNameEl.textContent = bodyEl.style.backgroundColor = getRandomHexColor();
}
