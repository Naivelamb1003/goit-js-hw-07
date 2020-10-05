const _counter = document.querySelector("#counter");
const decrementBtn = _counter.firstElementChild;
const incrementBtn = _counter.lastElementChild;
const counterSpan = document.querySelector("#value");
let counterValue = 0;
const decrement = function () {
  counterValue = counterValue - 1;
  counterSpan.textContent = counterValue;
};
decrementBtn.addEventListener("click", () => decrement());

const increment = function () {
  counterValue = counterValue + 1;
  counterSpan.textContent = counterValue;
};

incrementBtn.addEventListener("click", () => increment());
