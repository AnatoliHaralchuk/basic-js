const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sortarr = []
  for (let i=0; i<arr.length;i++){
      if (arr[i] === -1) continue
      sortarr.push(arr[i])
      delete arr[i]
    }
  sortarr.sort((a,b)=> a-b) 
  for (let a of sortarr){
      for (let i=0; i<arr.length;i++){
          if (arr[i] === undefined) {
              arr[i] = a
              break
          }
      }
  }
  return arr
}

module.exports = {
  sortByHeight
};
