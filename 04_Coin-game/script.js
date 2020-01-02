// Select element function
const selectElement = function(element) {
  return document.querySelector(element);
};

function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const avatar = selectElement("#player");
const coin = selectElement("#coin");
const scorekeep = selectElement("h1");
const restart = selectElement("#restart");
let score = 0;

restart.addEventListener("click", () => {
  score = 0;
  scorekeep.innerText = `Score: ${score}`;
});

window.addEventListener("keyup", function(e) {
  if (e.key === "ArrowDown") {
    const currTop = extractPos(avatar.style.top);
    avatar.style.top = `${currTop + 50}px`;
  } else if (e.key === "ArrowUp") {
    const currTop = extractPos(avatar.style.top);
    avatar.style.top = `${currTop - 50}px`;
  } else if (e.key === "ArrowRight") {
    const currLeft = extractPos(avatar.style.left);
    avatar.style.left = `${currLeft + 50}px`;
    avatar.style.transform = "scale(1,1)";
  } else if (e.key === "ArrowLeft") {
    const currLeft = extractPos(avatar.style.left);
    avatar.style.left = `${currLeft - 50}px`;
    avatar.style.transform = "scale(-1,1)";
  }

  if (isTouching(avatar, coin)) {
    moveCoin();
    score += 1;
    scorekeep.innerText = `Score: ${score}`;
  }
});

const extractPos = pos => {
  if (!pos) return 100;
  return parseInt(pos.slice(0, -2));
};

const moveCoin = () => {
  const y = Math.floor(Math.random() * window.innerHeight);
  const x = Math.floor(Math.random() * window.innerWidth);

  coin.style.top = `${y}px`;
  coin.style.left = `${x}px`;
};

moveCoin();
