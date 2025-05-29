/**
 * @param {string} dna
 * @returns {string}
 */
/*
Basic Solution:
const dnaStrand = (str) => {
    let newStr = "";
    for (let i of str) {
        if (i == "A") {
            newStr += "T";
        } else if (i == "T") {
            newStr += "A";
        } else if (i == "G") {
            newStr += "C";
        } else if (i == "C") {
            newStr += "G";
        }
    }
    return newStr;
};
dnaStrand("ATGC");
*/

const dnaStrand = (dna) => {
  const mapDna = { A: "T", T: "A", G: "C", C: "G" };
  return dna
    .split("")
    .map((char) => mapDna[char])
    .join("");
};

module.exports = dnaStrand;
