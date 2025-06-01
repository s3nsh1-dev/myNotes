/**
 *
 * @param {number} n
 * @param {number} p
 * @returns {number}
 */

function digPow(n, p) {
  const gg = String(n).split("");
  let powSumed = 0;
  for (let i = 0; i < gg.length; i++) {
    let temp = Math.pow(+gg[i], p++);
    powSumed += temp;
  }
  const result = powSumed / n;
  const foo = Math.floor(result) < result ? -1 : result;
  return foo;
  // ...
}
digPow(46288, 3);
module.exports = digPow;
