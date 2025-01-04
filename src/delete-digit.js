const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const resultArray = [];
  const digitArray = Array.from(String(n), Number);
  for (let i = 0; i < digitArray.length; i++) {
    const pushDigitArray = [...digitArray];
    pushDigitArray.splice(i, 1);
    resultArray.push(+pushDigitArray.join(''))
  }
  return resultArray.sort((a,b) => b -a)[0];
}

module.exports = {
  deleteDigit
};
