    
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  return arrays.reduce((myArray, array) => myArray.concat(array));
}
// console.log(flatten());
assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);