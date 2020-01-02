// https://www.codewars.com/kata/string-ends-with
// https://www.youtube.com/watch?v=py7MaPHJEjo

function solution(str, ending) {
  return new RegExp(ending + "$").test(str);
}

console.log(solution("abcde", "cde"), true);
console.log(solution("abcde", "abc"), false);
