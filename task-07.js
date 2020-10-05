const range = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

range.addEventListener("input", () => {
  text.style.fontSize = `${range.value}px`;
  console.log(range.value);
});
