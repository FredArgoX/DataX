const realSelect = document.getElementById("purposeSelector");
const customSelect = document.querySelector(".custom-select");
const optionsContainer = document.querySelector(".options-container");
const selectedDisplay = document.querySelector(".selected");

// Populate custom options
Array.from(realSelect.options).forEach(opt => {
  const div = document.createElement("div");
  div.classList.add("option");
  div.setAttribute("data-value", opt.value);
  div.textContent = opt.text;
  optionsContainer.appendChild(div);
});

// Toggle dropdown
selectedDisplay.addEventListener("click", () => {
  optionsContainer.style.display =
    optionsContainer.style.display === "block" ? "none" : "block";
});

// Handle selection
document.querySelectorAll(".option").forEach(option => {
  option.addEventListener("click", () => {
    selectedDisplay.textContent = option.textContent;
    realSelect.value = option.getAttribute("data-value");
    optionsContainer.style.display = "none";
  });
});

// Close on outside click
document.addEventListener("click", (e) => {
  if (!customSelect.contains(e.target)) {
    optionsContainer.style.display = "none";
  }
});