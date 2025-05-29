/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/
function isIsogram(str) {
  console.log(str);
}
const { assert, config } = require("chai");
config.truncateThreshold = 0;

describe("isIsogram", function () {
  it("Sample tests", function () {
    tester("Dermatoglyphics", true);
    tester("isogram", true);
    tester("aba", false);
    tester("moOse", false);
    tester("isIsogram", false);
    tester("", true);
  });
  const tester = (input, expected) => {
    assert.strictEqual(
      isIsogram(input),
      expected,
      `Failed for input: "${input}"\n`
    );
  };
});
