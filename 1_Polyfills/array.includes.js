// poyliflls of includes

// how to includes works?
Array.prototype.myIncludes = function (target) {
  let array = this;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return true;
    }
  }
  return false;
};

const arr = ["A", "B", "C", "D", "E"];
const arr2 = ["P", "Q", "R", "S"];

const isPresent = arr.myIncludes("D"); //custom
const isthere = arr2.includes("E"); //inbuilt

const ans = arr.myIncludes("P"); //custom

console.log(isPresent, isthere, ans);
