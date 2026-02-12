console.log("A");

function abc(x, fn) {
  let y = 2;
  let ans = fn(x, y) + fn(y, x);
  console.log("C");
  return ans;
}

function minus(x, y) {
  console.log("D");
  return x - y;
}

console.log("B");
let output = abc(4, minus);
console.log(output);
