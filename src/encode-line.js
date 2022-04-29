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
function encodeLine( str ) {
let result = []
let count = 1
for (let i in str){
if (str[+i+1] === str[+i]){count++}
else if (count === 1){result.push(str[+i])}
else {
  result.push(count)
  count = 1
  result.push(str[+i]) 
}
}
return result.join('')
}

module.exports = {
  encodeLine
};
