const surprises = [

"😂 Why don't skeletons fight? Because they don't have the guts!",

"🌍 There are more trees on Earth than stars in the Milky Way.",

"🐙 An octopus has three hearts.",

"🍯 Honey never spoils.",

"🦒 A giraffe's tongue can be 50 cm long.",

"🚀 Every expert was once a beginner.",

"💡 Success is built one small step at a time.",

"🎵 Listening to music can improve your mood.",

"🌈 The shortest war in history lasted only 38 minutes.",

"🍀 Today could be your lucky day!"

];

const result = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

function showSurprise() {
    const random = Math.floor(Math.random() * surprises.length);
    result.textContent = surprises[random];
}

showSurprise();

nextBtn.addEventListener("click", showSurprise);
