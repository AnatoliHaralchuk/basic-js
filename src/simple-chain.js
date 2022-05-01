const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr:[],
  getLength() {
     return this.arr.length
  },
  addLink(value) {
    if (arguments.length !== 0) {this.arr.push(`( ${value} )`)} else {this.arr.push(`( )`)}
    return this
  },
  removeLink(position) {
    if ((position > 0)&&(position < this.arr.length)){
      this.arr.splice(position-1,1)
      return this}
      else {
        this.arr.length = 0
        throw new Error (`You can't remove incorrect link!`)} 
  },
  reverseChain() {
    this.arr.reverse()
    return this
  },
  finishChain() {
    let result = this.arr.join('~~')
    this.arr.length = 0
    return result
  }
};

module.exports = {
  chainMaker
};
