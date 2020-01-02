// https://www.codewars.com/kata/reverse-words/train/javascript
// https://www.youtube.com/watch?v=V9aItIltNAA

function reverseWords(str) {
  // Go for it
  let words = str.split(" ");
  let reverseStr = "";
  for (word of words) {
    let revword = "";
    for (i = word.length - 1; i >= 0; i--) {
      revword += word[i];
    }
    reverseStr += revword + " ";
  }

  return reverseStr.trim();
}

function reverseWords(str) {
  return str
    .split(" ")
    .map(function(word) {
      return word
        .split("")
        .reverse()
        .join("");
    })
    .join(" ");
}

console.log(
  reverseWords("The quick brown fox jumps over the lazy dog."),
  "ehT kciuq nworb xof spmuj revo eht yzal .god"
);
console.log(reverseWords("apple"), "elppa");
console.log(reverseWords("a b c d"), "a b c d");
console.log(reverseWords("double  spaced  words"), "elbuod  decaps  sdrow");
