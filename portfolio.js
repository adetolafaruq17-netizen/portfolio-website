const modeToggle = document.getElementById("mode-toggle");
const body = document.body;

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeToggle.textContent = "☀️";
  } else {
    modeToggle.textContent = "🌙";
  }
});
