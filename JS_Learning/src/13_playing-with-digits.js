/**
 *
 * @param {number} n
 * @param {number} p
 * @returns {number}
 */

function digPow(n, p) {
  const digits = String(n).split("").map(Number);
  const sum = digits.reduce(
    (acc, digit, idx) => acc + Math.pow(digit, p + idx),
    0
  );
  return sum % n === 0 ? sum / n : -1;
}
module.exports = digPow;
