alert("Script Loaded");

const button = document.getElementById("surpriseBtn");
const result = document.getElementById("result");

button.addEventListener("click", () => {
    result.textContent = "It Works! 🎉";
});
const surprises = [
"😂 Why don't skeletons fight? Because they don't have the guts!",
"🌟 You are capable of amazing things.",
"🐱 A cat spends about 70% of its life sleeping.",
"🌍 There are more stars in space than grains of sand on Earth.",
"😄 Smile! Today might be your lucky day.",
"🚀 Small steps every day create big results.",
"🧠 Your brain can store millions of memories.",
"🍀 A little surprise can change your whole mood."
];

const button = document.getElementById("surpriseBtn");
const result = document.getElementById("result");

button.addEventListener("click", () => {
    const random = Math.floor(Math.random() * surprises.length);
    result.textContent = surprises[random];
});
