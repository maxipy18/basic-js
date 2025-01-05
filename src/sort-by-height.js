const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indexArray = [];
  arr.forEach((item, index) => {
    if (item === -1) indexArray.push(index)
    });
  const result = arr.sort((a,b) => a - b).filter((num) => num !== -1);
  for (let i = 0; i < indexArray.length; i++) {
    result.splice(indexArray[i], 0, -1)
  }
  return result;
}

module.exports = {
  sortByHeight
};
