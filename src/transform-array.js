const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`)
  let duble = arr.concat()
  for (let i=0;i<duble.length;i++){
    if (duble[i] === '--discard-next'){
      if ((duble[i+2] === '--discard-prev')||(duble[i+2] === '--double-prev')){duble.splice(i,3)}
      else if ((typeof duble[i+1] === 'string')){duble.splice(i,2)}
      else if (duble[i+1] !== undefined) {duble.splice(i,2)} else {duble.splice(i,1)}}
    if (duble[i] === '--discard-prev'){
      if ((typeof duble[i+1] === 'string')){duble.splice(i,2)}
      else if (duble[i-1] !== undefined) {duble.splice(i-1,2)} else {duble.splice(i,1)}}
    if (duble[i] === '--double-next'){
      if ((typeof duble[i+1] === 'string')){duble.splice(i,2)}
      else if (duble[i+1] !== undefined) {duble.splice(i,1,duble[i+1])} else {duble.splice(i,1)}}
    if (duble[i] === '--double-prev'){
      if ((typeof duble[i+1] === 'string')){duble.splice(i,2)}
      else if (duble[i-1] !== undefined) {duble.splice(i,1,duble[i-1])} else {duble.splice(i,1)}}
  }
  return duble
}

module.exports = {
  transform
};
