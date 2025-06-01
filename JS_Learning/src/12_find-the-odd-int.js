/**
 *
 * @param {[]} A
 * @returns {number}
 */

function findOdd(A) {
  //happy coding!
  const setA = new Set(A);
  const mapA = new Map();
  for (let i of setA) {
    mapA.set(i, 0);
  }
  for (let i of A) {
    if (mapA.has(i)) {
      let gg = mapA.get(i);
      mapA.set(i, gg + 1);
    }
  }
  let result = 0;
  for (let [key, values] of mapA.entries()) {
    if (values % 2 != 0) {
      return key;
    }
  }
  return 0;
}
module.exports = findOdd;
