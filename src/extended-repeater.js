const { NotImplementedError } = require('../extensions/index.js');

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
function repeater(str, options) {
  if (typeof str !== 'string') str = String(str)
  let addition = ''
  let arrA = []
  let arrS = []
  let additionSeparator
  if (options.hasOwnProperty('addition')){
    addition = options.addition
    if (typeof addition !== 'string') addition = String(addition)
    if (options.hasOwnProperty('additionRepeatTimes')){
      for (let i=0;i<options.additionRepeatTimes;i++){arrA.push(addition)}
      additionSeparator = (options.hasOwnProperty('additionSeparator')) ? options.additionSeparator :'|'
      addition = arrA.join(additionSeparator)
      } 
    } 
  
  let result = str + addition
  if (options.hasOwnProperty('repeatTimes')){
    for (let i=0;i<options.repeatTimes;i++){arrS.push(result)}
      separator = (options.hasOwnProperty('separator')) ? options.separator :'+'
      result = arrS.join(separator)
      } 
  return result
}

module.exports = {
  repeater
};
