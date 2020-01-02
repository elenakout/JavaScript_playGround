# Beginner - Lost Without a Map

### Given an array of integers, return a new array with each value doubled.

For example:

```
[1, 2, 3] --> [2, 4, 6]
```

All the array methods

> Solutions:

```js
function maps(numbers) {
  // a place to store the doubled values
  const doubled = [];

  // iterate over the array of numbers
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    // double the current value and add to the doubled values array
    const doubledNumber = number * 2;
    doubled.push(doubledNumber);
  }

  // return the doubled array
  return doubled;
}

function maps(numbers) {
  const doubled = [];

  for (const number of numbers) {
    const doubledNumber = number * 2;
    doubled.push(doubledNumber);
  }

  return doubled;
}

function maps(numbers) {
  const doubled = [];

  for (const i in numbers) {
    const number = numbers[i];
    const doubledNumber = number * 2;
    doubled.push(doubledNumber);
  }

  return doubled;
}

function maps(numbers) {
  const doubled = [];

  // can get forEach((number, i, array ={}))
  numbers.forEach(number => {
    const doubledNumber = number * 2;
    doubled.push(doubledNumber);
  });

  return doubled;
}

function maps(numbers) {
  const doubled = numbers.map(number => {
    const doubledNumber = number * 2;
    return doubledNumber;
  });
  return doubled;
}

function maps(numbers) {
  return numbers.map(number => {
    const doubledNumber = number * 2;
    return doubledNumber;
  });
}

function maps(numbers) {
  return numbers.map(number => {
    return number * 2;
  });
}

function maps(numbers) {
  return numbers.map(number => number * 2);
}

function maps(numbers) {
  return numbers.map(number => number * 2);
}

function maps(n) {
  return n.map(n => n * 2);
}

function maps(numbers) {
  return 2 * numbers;
}

console.log(maps([1, 2, 3]), [2, 4, 6]);
console.log(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]);
console.log(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]);
```

---

---

# More Methods

- includes()

This method check if array includes the item passed in the method.

```js
const arr = [1, 2, 3, 4, 5, 6];

arr.includes(2); // output: true
arr.includes(7); // output: false
```

---

- filter()

This method create new array with only elements passed condition inside the provided function.

```js
const arr = [1, 2, 3, 4, 5, 6];

// item(s) greater than 3
const filtered = arr.filter(num => num > 3);
console.log(filtered); // output: [4, 5, 6]

console.log(arr); // output: [1, 2, 3, 4, 5, 6]
```

---

- reduce()

The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value - MDN

```js
const arr = [1, 2, 3, 4, 5, 6];

const sum = arr.reduce((total, value) => total + value, 0);
console.log(sum); // 21
```

---

- some()

This method check if at least one of array's item passed the condition. If passed, it return 'true' otherwise 'false'.

```js
const arr = [1, 2, 3, 4, 5, 6];

// at least one element is greater than 4?
const largeNum = arr.some(num => num > 4);
console.log(largeNum); // output: true

// at least one element is less than or equal to 0?
const smallNum = arr.some(num => num <= 0);
console.log(smallNum); // output: false
```

---

- every()

This method check if all array's item passed the condition. If passed, it return 'true' otherwise 'false'.

```js
const arr = [1, 2, 3, 4, 5, 6];

// all elements are greater than 4
const greaterFour = arr.every(num => num > 4);
console.log(greaterFour); // output: false

// all elements are less than 10
const lessTen = arr.every(num => num < 10);
console.log(lessTen); // output: true
```

---

- sort()

This method used to arrange/sort array's item either ascending or descending order.

```js
const arr = [1, 2, 3, 4, 5, 6];
const alpha = ['e', 'a', 'c', 'u', 'y'];

// sort in descending order
descOrder = arr.sort((a, b) => (a > b ? -1 : 1));
console.log(descOrder); // output: [6, 5, 4, 3, 2, 1]

// sort in ascending order
ascOrder = alpha.sort((a, b) => (a > b ? 1 : -1));
console.log(ascOrder); // output: ['a', 'c', 'e', 'u', 'y']
```

---

- Array.from()

This change all thing that are array-like or iterable into true array especially when working with DOM, so that you can use other array methods like reduce, map, filter and so on.

```js
const name = 'frugence';
const nameArray = Array.from(name);

console.log(name); // output: frugence
console.log(nameArray); // output: ['f', 'r', 'u', 'g', 'e', 'n', 'c', 'e']
```

working with DOM

```js
// I assume that you have created unorder list of items in our html file.

const lis = document.querySelectorAll('li');
const lisArray = Array.from(document.querySelectorAll('li'));

// is true array?
console.log(Array.isArray(lis)); // output: false
console.log(Array.isArray(lisArray)); // output: true
```
