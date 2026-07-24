const result = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

function showSurprise() {

    const random = Math.floor(Math.random() * surprises.length);

    result.classList.remove("showAnimation");

    void result.offsetWidth;

    result.textContent = surprises[random];

    result.classList.add("showAnimation");
}

        result.style.opacity = "1";

    }, 200);

}

showSurprise();

nextBtn.addEventListener("click", showSurprise);
