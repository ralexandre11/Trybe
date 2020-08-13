
const assert = require('assert');

// escreva a função addOne aqui
const addOne = (myArray) => {
  const result = [];
  for (let i = 0; i < myArray.length; i += 1) {
    result.push(myArray[i] + 1);
  }
  return result;
};

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepEqual(output, expected);
assert.deepEqual(myArray, unchanged);