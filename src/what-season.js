const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( date ) {
  if (date === undefined) return 'Unable to determine the time of year!'
  if ((date.hasOwnProperty('getMonth'))||Object.getOwnPropertyNames(date).length>0||!(date instanceof Date)) throw new Error('Invalid date!')
  let season = date.getMonth()+1
  if ((season>=3)&&(season<=5)) {return 'spring'}
  else if ((season>=6)&&(season<=8)) {return 'summer'}
  else if ((season>=9)&&(season<=11)) {return 'autumn'}
  else {return 'winter'}
}

module.exports = {
  getSeason
};
