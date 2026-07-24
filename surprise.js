const result = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

function showSurprise(){

result.classList.remove("show");

setTimeout(()=>{

const random=Math.floor(Math.random()*surprises.length);

result.textContent=surprises[random];

result.classList.add("show");

},200);

}

showSurprise();

nextBtn.addEventListener("click",showSurprise);
