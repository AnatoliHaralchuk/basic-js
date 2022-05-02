const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  isTrue = true
  constructor(value){
    if (value === false){
      this.isTrue = false
    }
  }
  encrypt(message,key) {
    if ((key === undefined)||(message === undefined)) {throw new Error('Incorrect arguments!')}
    let alfabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    key = key.toUpperCase()
    message = message.toUpperCase()
    let result = []
    let j = 0
    for (let i=0; i<message.length;i++){
        if (j === (key.length)){j = 0}
        let indexMes = alfabet.indexOf(message[i])
        if (indexMes !== -1){
            let indexKey = alfabet.indexOf(key[j])
            result.push(alfabet[(indexMes + indexKey)%(alfabet.length)])
            j++
        } else {
            result.push(message[i])
        }
    }
    return (this.isTrue) ? result.join('') : result.reverse().join('')
  }
  decrypt(message,key) {
    if ((key === undefined)||(message === undefined)) {throw new Error('Incorrect arguments!')}
    let alfabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    key = key.toUpperCase()
    message = message.toUpperCase()
    let result = []
    let j = 0
    for (let i=0; i<message.length;i++){
        if (j === (key.length)){j = 0}
        let indexMes = alfabet.indexOf(message[i])
        if (indexMes !== -1){
            let indexKey = alfabet.indexOf(key[j])
            let index = indexMes - indexKey
            if ( index >= 0){result.push(alfabet[(index)])}
            else {result.push(alfabet[(alfabet.length + index)])}
            j++
        } else {
            result.push(message[i])
        }
    }
    return (this.isTrue)?result.join(''):result.reverse().join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
