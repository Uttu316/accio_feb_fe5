const p = new Promise((res, rej) => {
  setTimeout(() => {
    res("Hello"); // this value passed in then function
  }, 3000);
});

p.then((v) => {
  console.log(v); // we are not resolving
  return v + " A"; // this value will be passed as resolved value in next then
})
  .then((v) => {
    console.log(v); //output?
    throw new Error("oops"); // throw keyword to reject the next promise
  })
  .then((v) => {
    console.log(v); //
  })
  .catch((err) => {
    console.log("Error", err);
  });
