//p object->then,catch,finally(async)

const p = new Promise((resolve, reject) => {
  //task (sync)

  //async function
  setTimeout(() => {
    const value = parseInt(prompt("Enter a value"));
    if (value % 2 === 0) {
      resolve("Even"); // async
    } else {
      reject("Odd"); // async
    }
  }, 3000);
});

p.then((data) => {
  console.log(data);
})
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Done");
  });
