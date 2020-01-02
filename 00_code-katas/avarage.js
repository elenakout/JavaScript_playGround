// Write a function to find the average value in an array of numbers

function avg(arr) {
  let avg = 0;
  for (num of arr) {
    avg += num;
  }
  return avg / arr.length;
}

console.log(avg([0, 50])); //25
console.log(avg([75, 76, 80, 95, 100])); //85.2
