const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  for (let i = 0; i < domains.length; i++) {
    const initArray = domains[i].split('.').reverse().map((item) => `.${item}`);
    let key = initArray[0];
    initArray.forEach((item) => {
      key = key === item ? key : key.concat(item);
      if (result[key]) {
        result[key] += 1;
      } else {
        result[key] = 1;
      }
    })
  }
  return result;
}

module.exports = {
  getDNSStats
};
