const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("A");
  }, 3000);
}); //3s A
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("B");
  }, 2000);
}); //2s B

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("C");
  }, 1000);
}); //1s C

const p = Promise.allSettled([p1, p2, p3]);

console.log("Start");
// console.time("p")
// let st = performance.now()
// let sta = Date.now()
p.then((output) => {
  console.log(output);
  // console.timeEnd("p")
  // console.log(performance.now()-st)
  // console.log(Date.now()-sta)
}).catch((err) => {
  console.log("Error", err);
});
