// how many ways are there to return promise from function?

// const getData = ()=>{
//     return new Promise((resolve,reject)=>(
//         resolve("Hello")
//         ))
// }

// const getData = ()=>{
//     return Promise.resolve("hey")
// }

async function getData() {
  //sync tasks
  // return "Hello" // resolve("hello")
  throw "Bye"; // reject("Bye")
}

const p = getData();
p.then((v) => {
  console.log("Success", v);
}).catch((e) => {
  console.log("Fail", e);
});
