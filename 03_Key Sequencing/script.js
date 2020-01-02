let bufferArray = [];
let lastKeystrokeTime = Date.now();

// Cheatcode
const cheatCode = "elena";

window.addEventListener("keyup", e => {
  const key = e.key.toLowerCase();
  let latestKeystrokeTime = Date.now();

  if (latestKeystrokeTime - lastKeystrokeTime > 1500) {
    bufferArray = [];
  }

  bufferArray.push(key);

  const word = bufferArray.join("");
  if (word === cheatCode) {
    cornify_add();
  }

  lastKeystrokeTime = latestKeystrokeTime;

  console.log(word);
});
