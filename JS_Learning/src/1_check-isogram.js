/**
 * @param {string} str
 * @returns {boolean}
 */
function isIsogram(str) {
  const lowerCaseStr = str.toLowerCase();
  return new Set(lowerCaseStr).size === str.length;
}
module.exports = isIsogram;
