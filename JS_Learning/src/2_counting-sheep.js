/**
 *
 * @param {[]} sheep
 * @returns {number}
 */

/*
Basic Solution:
function countSheeps(sheep) {
  let totalSheeps = 0;
  for (let i of sheep) {
    if (i) {
      totalSheeps++;
    }
  }
  return totalSheeps;
}
*/

// Advance Solution:
const countSheeps = (sheep) => sheep.filter(Boolean).length;

module.exports = countSheeps;
