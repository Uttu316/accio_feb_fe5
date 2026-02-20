const api = () => {
  return new Promise((res, reject) => {
    setTimeout(() => {
      reject("Hello");
    }, 3000);
  });
};

async function getData() {
  try {
    console.log("Start");

    const data = await api(); //3 sec. after 3 sec this will puch into micro task

    console.log("After await");

    return data;
  } catch (e) {
    //block scope
    console.log("Error", e);
  }
}

//await: await keyword makes the remaining execution of the function wait till given promise is settle
//   await keyword turns the remaining execution of function in async code once the given promise get settle then the async code pushed into micro task queue
console.log("A");

getData()
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    //funciton scope
    console.log(e);
  });

console.log("B");
