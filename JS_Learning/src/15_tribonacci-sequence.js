/**
 *
 * @param {[]} signature
 * @param {number} n
 */

function tribonacci(signature, n) {
  if (n <= 0) return [];
  if (n <= 3) return signature.slice(0, n);

  const result = [...signature];
  while (result.length < n) {
    const next = result.slice(-3).reduce((a, b) => a + b, 0);
    result.push(next);
  }
  return result;
}
module.exports = tribonacci;
