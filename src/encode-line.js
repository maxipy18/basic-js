const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  const resultArray = [];
  for (let i = 0; i < str.length; i++){
    if (str[i] === str[i + 1]){
      count += 1;
      continue;
    }
    if (count === 1) {
      resultArray.push(str[i])
    }
    if (count > 1) {
      resultArray.push(`${count}${str[i]}`)
      count = 1;
    }
  }
  return resultArray.join('');
}

module.exports = {
  encodeLine
};
