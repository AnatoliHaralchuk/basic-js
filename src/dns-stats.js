const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let domainsCopy = []
  let result = {}
  for (let i of domains){
      let a = '.' + i.split('.').reverse().join('.')
      domainsCopy.push(a)
  }
  function findCount(elem){
      let dns = []
      let index = 0
      do{
          let count = 0
          let find
          index = elem.indexOf('.', ++index)
          if (index !== -1) {
              find = elem.slice(0,index)}
              else {find = elem}
          domainsCopy.forEach((e) => {if (e.includes(find)&&!dns.includes(find)) count++})
          dns.push(find)
          result[find] = count
      }while(index !== -1)
  }
  for (let i of domainsCopy){
      findCount(i)
  }
  return result
}

module.exports = {
  getDNSStats
};
