/**
 *
 * @param {number} nFloors
 * @returns {[]}
 */

function towerBuilder(nFloors) {
  // build here
  const temp = "*";
  for (let i = 0; i < nFloors; i++) {
    console.log(temp);
  }
  findTotalNumber(nFloors);
}
const findTotalNumber = (floor) => {
  let odd = 0;
  for (let i = 0; i <= floor; i++) {
    if (i % 2 !== 0) {
      odd = i;
    }
  }
  console.log("odd", odd);
};
function fillIn(num, size) {
  let final = new Array(size);
  if (num == size) {
    return "*".repeat(num);
  }
  for (let i = 0; i < num; i++) {}
}
towerBuilder(10);
fillIn(5, 5);
module.exports = towerBuilder;
