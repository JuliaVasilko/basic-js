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
  const numArr = n.toString().split('');

  const emptyArr = Array.from({length: numArr.length});

  const arrayWithAllOptions = emptyArr.map((element, index) => {
    const localCopy = [...numArr];
    localCopy.splice(index, 1);
    return Number(localCopy.join(''));
  });

  const maxNumber = Math.max(...arrayWithAllOptions)

  return maxNumber;
}

module.exports = {
  deleteDigit
};
