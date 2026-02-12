console.log("A");
const getData = (username, onSuccess, onFailure) => {
  console.log("Fetching User");
  setTimeout(() => {
    if (username === "abc") {
      const data = {
        name: "ABC XYZ",
        id: "ac2w22",
      };
      onSuccess(data);
    } else {
      onFailure("Oops");
    }
  }, 3000);
};

console.log("B");
getData(
  "abc",
  (user) => {
    console.log("User", user);
  },
  (err) => {
    console.log(err);
  },
);
console.log("C");
