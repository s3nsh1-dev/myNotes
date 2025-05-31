/**
 *
 * @param {string} numbers
 * @returns {string}
 */

function highAndLow(numbers) {
  const stringArray = numbers.split(" ");
  stringArray.sort((a, b) => a - b);
  const lowest = stringArray[0];
  const highest = stringArray[stringArray.length - 1];
  return `${highest} ${lowest}`;
}
module.exports = highAndLow;
