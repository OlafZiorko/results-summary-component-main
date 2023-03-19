const scores = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
  },
];

/* Hooks */

const colors = ["red", "orange", "green", "blue"];
const container = document.querySelector(".summary__container");
let title = document.querySelector(".title--desc");
let result = document.querySelector(".result--total-score");
let msg = document.querySelector(".result--msg");
let btn = document.querySelector(".btn");

window.addEventListener("load", () => {
  let score = scores.forEach((block, index) => {
    container.innerHTML += `<div class="summary ${colors[index]}" >
      <div class="title">
      <span class="title--img"><img src="${block.icon}" alt=""/></span>
        <span class="title--desc">${block.category}</span>
      </div>
      <div class="score">
        <p class="score-of"><span class="of-total">${block.score}</span> / 100 </p>
      </div>
    </div>`;
  });

  let displayScore = 0;
  const timer = setInterval(() => {
    result.textContent = displayScore;
    displayScore++;
    if (displayScore === 68) {
      clearInterval(timer);
      msg.classList.add("animation");
    }
  }, 30);
});

btn.addEventListener("click", () => {
  setTimeout(() => {
    btn.classList.add("dupa");
  }, 1000);
});
