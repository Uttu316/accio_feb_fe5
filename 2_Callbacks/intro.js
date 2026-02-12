function print(value) {
  console.log("Output is:", value);
}

function sum(x, y, callback) {
  let ans = x + y;
  callback(ans);
}
function mul(x, y, callback) {
  let ans = x * y;
  callback(ans);
}

sum(2, 3, print); // callback is print function
mul(4, 5, print); // mul is high order functon
