/**
 *
 * @param {number} year
 * @returns {number}
 */

function century(year) {
  return Math.ceil(year / 100);
}
module.exports = century;
