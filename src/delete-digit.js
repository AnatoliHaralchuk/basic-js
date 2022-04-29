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
let max = 0;
let arr = n.toString().split('')
for (let i in arr){
  let t = arr.slice()
  t.splice(i,1)
  let x = +t.join("")
  if (x>max) {max = x}
}
return max
}

module.exports = {
  deleteDigit
};
