const result = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

function showSurprise() {
    const random = Math.floor(Math.random() * surprises.length);
    result.textContent = surprises[random];
}

        result.style.opacity = "1";

    }, 200);

}

showSurprise();

nextBtn.addEventListener("click", showSurprise);
