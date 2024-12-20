const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let currDepth = 1;

    for (let element of arr) {
      if (Array.isArray(element)) {
        currDepth = Math.max(currDepth, this.calculateDepth(element) + 1);
      }
    }

    return currDepth;
  }
}

module.exports = {
  DepthCalculator,
};
