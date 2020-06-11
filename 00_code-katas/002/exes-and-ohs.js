// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  const word = str.split('');
  let xCounter = 0;
  let oCounter = 0;

  word.map((ch) => {
    if (ch === 'x' || ch === 'X') {
      xCounter++;
    } else if (ch === 'o' || ch === 'O') {
      oCounter++;
    }
  });

  return xCounter === oCounter ? true : false;
}

function XO(str) {
  const word = str.toLowerCase().split('');
  let xCounter = 0;
  let oCounter = 0;

  word.map((ch) => {
    if (ch === 'x') {
      xCounter++;
    } else if (ch === 'o') {
      oCounter++;
    }
  });

  return xCounter === oCounter ? true : false;
}

console.log(XO('xo'), true);
console.log(XO('xxOo'), true);
console.log(XO('xxxm'), false);
console.log(XO('Oo'), false);
console.log(XO('ooom'), false);
