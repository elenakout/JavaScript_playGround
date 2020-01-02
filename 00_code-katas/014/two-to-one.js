// https://www.youtube.com/watch?v=dE5TV-TGfEo
// https://www.codewars.com/kata/two-to-one

function longest(s1, s2) {
  // your code
  s1 = s1.split("").sort();
  s2 = s2.split("").sort();
  s1 = [...new Set(s1 + s2)];
  return s1.join("");
}

console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty");
console.log(
  longest("loopingisfunbutdangerous", "lessdangerousthancoding"),
  "abcdefghilnoprstu"
);
console.log(
  longest("inmanylanguages", "theresapairoffunctions"),
  "acefghilmnoprstuy"
);
