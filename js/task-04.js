const valueEl = document.querySelector("#value");
const buttonDecrementEl = valueEl.nextElementSibling;
const buttonIncrementEl = valueEl.previousElementSibling;


let counterValue = 0;

buttonDecrementEl.addEventListener("click", () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
});

buttonIncrementEl.addEventListener("click", () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
});

