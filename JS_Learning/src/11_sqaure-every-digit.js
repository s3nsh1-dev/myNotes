/**
 *
 * @param {number} num
 * @returns {number}
 */

function squareDigits(num) {
  const result = String(num)
    .split("")
    .map((num) => num * num)
    .join("");
  return +result;
}
module.exports = squareDigits;
