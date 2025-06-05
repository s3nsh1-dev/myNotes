/**
 *
 * @param {number} nFloors
 * @returns {[]}
 */
function towerBuilder(nFloors) {
  const tower = [];
  for (let i = 1; i <= nFloors; i++) {
    const stars = "*".repeat(i * 2 - 1);
    const spaces = " ".repeat(nFloors - i);
    tower.push(spaces + stars + spaces);
  }
  return tower;
}
module.exports = towerBuilder;
