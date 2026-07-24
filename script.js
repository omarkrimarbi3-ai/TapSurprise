const button = document.getElementById("surpriseBtn");
const result = document.getElementById("result");

button.addEventListener("click", () => {
    const random = Math.floor(Math.random() * surprises.length);
    result.textContent = surprises[random];
});
