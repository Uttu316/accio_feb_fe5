console.log("A");

function api() {
  console.log("B");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello");
    }, 3000);
    console.log("C");
  });
}

console.log("D");

async function getData() {
  console.log("E");
  try {
    const data = await api();
    console.log(data);
  } catch (e) {
    console.log("Error", e);
  }
  console.log("F");
}
getData();
console.log("G");
