const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address( n ) {
let low = '0123456789ABCDEF'
  for (let i=2; i<n.length; i=i+3){
    if (!(n[i] === '-')) return false
  }
  for (let i of n){
    if (!low.includes(i)&&(i !== '-')) return false
  }
  return true
}
module.exports = {
  isMAC48Address
};
