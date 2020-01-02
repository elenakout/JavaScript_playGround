// https://www.codewars.com/kata/dubstep/javascript

function songDecoder(song) {
  return song.replace(/(WUB)+/g, " ").trim();
}

console.log(songDecoder("AWUBBWUBC"));

console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"));

console.log(songDecoder("WUBAWUBBWUBCWUB"));

console.log(songDecoder("WUBAWUBBWUBCWUB"));
