// https://www.codewars.com/kata/vowel-count
// https://www.youtube.com/watch?v=Ms7L-aVN4Hc

function getCount(str) {
  var vowelsCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}

console.log(getCount("abracedabra"), 5);
