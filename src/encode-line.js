const { NotImplementedError } = require("../extensions/index.js");

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
  let res = "";
  let count = 1;
  let curr = str[0];
  for (let i = 1; i < str.length + 1; i++) {
    if (str[i] === curr) {
      count++;
    } else {
      if (count !== 1) {
        res += count;
      }
      res += curr;

      count = 1;
      curr = str[i];
    }
  }
  return res;
}

module.exports = {
  encodeLine,
};
