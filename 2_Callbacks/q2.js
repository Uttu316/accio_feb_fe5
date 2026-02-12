console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

setTimeout(() => {
  console.log("C");
}, 600);

setTimeout(() => {
  console.log("D");
}, 1000);

console.log("E");
