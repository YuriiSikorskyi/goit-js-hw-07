function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// let amount = 0;
const inputEl = document.querySelector("#controls").children;
const divBoxes = document.querySelector("#boxes");

inputEl[0].addEventListener('input', inputFunction);

function inputFunction() {
  let a = inputEl[0].value;
  return a
}

inputEl[1].addEventListener('click', createBoxes);

function createBoxes(amount) {
  amount= inputFunction();
  const boxes = [];
  
  for (let i = 0; i < amount; i++) {
    
    const a = `<div> </div>`;
    boxes.push(a);
    
  }
  
  divBoxes.insertAdjacentHTML("beforeend", boxes.join(" "));

    let b = 30;
    for (let i = 0; i < amount; i++) {
      
      divBoxes.children[i].style.backgroundColor = getRandomHexColor();
      divBoxes.children[i].style.width = `${b}px`;
      divBoxes.children[i].style.height = `${b}px`;
      b = b + 10;
      
    }
}

inputEl[2].addEventListener('click', destroyBoxes);

function destroyBoxes() {
  divBoxes.innerHTML = "";
}