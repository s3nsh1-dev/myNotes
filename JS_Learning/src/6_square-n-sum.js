/**
 *
 * @param {[]} numbers
 * @returns {number}
 */

function squareSum(numbers) {
  if (numbers.length < 1) {
    return 0;
  }
  return numbers.map((item) => item * item).reduce((a, b) => a + b);
}
console.log(squareSum([1, 2, 2]));
module.exports = squareSum;
