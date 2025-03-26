const greetButton = document.getElementById("greetBtn");
const message = document.getElementById("message");

greetButton.addEventListener("click", () => {
  const userName = prompt("What is your name?");
  if (userName) {
    message.textContent = `Hello, ${userName}!`;
  } else {
    message.textContent = "You didn't provide a name.";
  }
});
