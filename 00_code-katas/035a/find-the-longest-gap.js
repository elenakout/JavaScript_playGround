// https://www.codewars.com/kata/find-the-longest-gap/train/javascript
// https://www.youtube.com/watch?v=c5AEo3Ac-FI

function gap(num) {
  //code me
  const binaryString = num.toString(2);

  // variable to store the longest gap
  // initialize to zero
  let gap = 0;

  // variable to strore the current longest gap
  // initialize to zero
  let curGap = 0;

  // iterate over the binaryString
  for (let i = 0; i <= binaryString.length; i++) {
    // if current value is 1
    if (binaryString[i] == "1") {
      // check if current longest gap is greater longest gap
      //if so update the overall longest gap
      gap = curGap > gap ? curGap : gap;
      // reset current longest gap to zero
      curGap = 0;
    } else if (binaryString[i] == "0") {
      // if current value is 0
      // increment the current longest gap
      curGap++;
    }
  }
  // return overall longest gap
  return gap;
}

console.log(gap(9), 2);
console.log(gap(529), 4);
console.log(gap(20), 1);
console.log(gap(15), 0);
console.log(gap(529), 0);
