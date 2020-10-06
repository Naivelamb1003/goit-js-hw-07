const controls = document.querySelector("#controls");
const divBoxes = document.querySelector("#boxes");

const input = controls.firstElementChild;
const destroy = controls.lastElementChild;
const render = destroy.previousElementSibling;

const createBoxes = function (amount) {
  const arrayDiv = [];
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const createdDiv = document.createElement("div");
    let r = Math.floor(Math.random() * Math.floor(255));
    let g = Math.floor(Math.random() * Math.floor(255));
    let b = Math.floor(Math.random() * Math.floor(255));
    createdDiv.style.background = `rgb(${r}, ${g}, ${b})`;
    createdDiv.style.width = `${size}px`;
    createdDiv.style.height = `${size}px`;
    size = size + 10;
    arrayDiv.push(createdDiv);
  }
  for (let j = 0; j < amount; j += 1) {
    divBoxes.appendChild(arrayDiv[j]);
  }
};

render.addEventListener("click", () => {
  createBoxes(input.value);
});

const destroyBoxes = function () {
  let boxes = divBoxes.children;
  Array.from(boxes).forEach((box) => box.remove());
};

destroy.addEventListener("click", () => {
  destroyBoxes();
  input.value = 0;
});
