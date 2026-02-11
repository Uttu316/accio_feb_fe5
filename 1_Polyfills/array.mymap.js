// write the polyfill for array.map

let arr = ["A", "B", "C", "G", "U", "Y"];

// how array map works
// loops the array, call a callback for every item, store result of callback in output array, return that output Array

// override if not present
if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callback) {
    const array = this;
    const output = [];
    for (let i = 0; i < array.length; i++) {
      const result = callback(array[i], i, array);
      output.push(result);
    }
    return output;
  };
}

const output = arr.myMap((item, index, array) => {
  return item + index;
});

console.log(output);
