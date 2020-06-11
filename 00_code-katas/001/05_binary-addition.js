function addBinary(a, b) {
  const c = a + b;
  if (c >= 0) {
    return c.toString(2);
  } else {
    return (~c).toString(2);
  }
}

console.log(addBinary(1, 2), '11');
console.log(addBinary(51, 12), '111111');
console.log(addBinary(100, 0), '1100100');
