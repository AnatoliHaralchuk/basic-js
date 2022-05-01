const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const saper = matrix.map(e => e.slice())

  for (let i=0; i<saper.length; i++){
    for (let j=0;j<saper[i].length;j++){
      saper[i][j] = 0 
    }
  }
  for (let i=0; i<matrix.length; i++){
    for (let j=0;j<matrix[i].length;j++){
      if (matrix[i][j] === true){
        if (i === 0){saper[i+1][j] += 1}
          else if (i === (i.length - 1)){saper[i-1][j] += 1}
          else {saper[i+1][j] += 1;saper[i-1][j] += 1}
        if (j === 0){saper[i][j+1] += 1}
          else if (j === (j.length -1)){saper[i][j-1] += 1}
          else {saper[i][j+1] += 1;saper[i][j-1] += 1}
        if ((j === 0)&&(i === 0)){saper[i+1][j+1] += 1}
        else if ((j === (j.length -1))&&(i === (i.length -1))){saper[i-1][j-1] += 1}
        else if ((j === 0)&&(i === (i.length -1))){saper[i-1][j+1] += 1}
        else if ((j === (j.length -1))&&(i === 0)){saper[i+1][j-1] += 1}
        else {saper[i+1][j+1] += 1;saper[i-1][j-1] += 1;saper[i-1][j+1] += 1;saper[i+1][j-1] += 1}
      }
    }
  } 
  return saper
}

module.exports = {
  minesweeper
};
