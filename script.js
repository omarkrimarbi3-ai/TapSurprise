alert("Script Loaded");

const button = document.getElementById("surpriseBtn");
const result = document.getElementById("result");

button.addEventListener("click", () => {
    result.textContent = "It Works! 🎉";
});
