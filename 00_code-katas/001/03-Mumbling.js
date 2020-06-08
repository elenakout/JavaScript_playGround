// https://www.codewars.com/kata/mumbling
// https://www.youtube.com/watch?v=Oq7r8metsD8

function accum(s) {
  // for each letter cache the index
  // repeat letter for so many times

  let str = '';

  for (let i = 0; i < s.length; i++) {
    str = str.concat(s[i].toUpperCase());
    for (let j = i; j > 0; j--) {
      str = str.concat(s[i].toLowerCase());
    }
    if (i !== s.length - 1) {
      str = str.concat('-');
    }
  }
  return str;
}

console.log(
  accum('ZpglnRxqenU'),
  'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu'
);
console.log(
  accum('NyffsGeyylB'),
  'N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb'
);
console.log(
  accum('MjtkuBovqrU'),
  'M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu'
);
console.log(
  accum('EvidjUnokmM'),
  'E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm'
);
console.log(
  accum('HbideVbxncC'),
  'H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc'
);
