window.onload = function () {

const button = document.getElementById("surpriseBtn");
const result = document.getElementById("result");

button.addEventListener("click", function () {

const random = Math.floor(Math.random() * surprises.length);

result.textContent = surprises[random];

});

};
