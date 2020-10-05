const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const startGreeting = output.textContent;

input.addEventListener("input", () => {
  if (input.value !== "") {
    output.textContent = input.value;
  } else {
    output.textContent = startGreeting;
  }
});
