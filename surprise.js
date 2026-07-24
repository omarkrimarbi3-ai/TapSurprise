

const result = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

function showSurprise() {
    const random = Math.floor(Math.random() * surprises.length);
    result.textContent = surprises[random];
}

showSurprise();

nextBtn.addEventListener("click", showSurprise);
