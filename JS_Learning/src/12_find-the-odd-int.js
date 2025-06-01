/**
 *
 * @param {[]} A
 * @returns {number}
 */

function findOdd(A) {
  return A.reduce((acc, num) => acc ^ num, 0);
}
module.exports = findOdd;
