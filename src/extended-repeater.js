const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(
  str,
  { repeatTimes, separator = '+', addition, additionRepeatTimes, additionSeparator = '|' }
) {
  let addStr = '';
  if(addition !== undefined) {
    addStr = new Array(additionRepeatTimes)
    .fill(String(addition))
    .join(additionSeparator);
  }
  
  const string = String(str) + addStr;

  return new Array(repeatTimes).fill(string).join(separator);
}

module.exports = {
  repeater,
};
