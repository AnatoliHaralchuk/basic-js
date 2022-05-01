const { NotImplementedError } = require('../extensions/index.js');

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
  calculateDepth(arr, count = 1) {
    let sum = arr.reduce((acc,e) => (Array.isArray(e))? acc+=1:acc,0)
    if (sum === 0){return  count}
    else {return this.calculateDepth(arr.flat(1),count+=1)}
   }
}

module.exports = {
  DepthCalculator
};
