function isIsogram(str) {
  str = str.toLowerCase();
  return new Set(str).size === str.length;
}
module.exports = isIsogram;
