/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

const { assert } = require("chai");
const isIsogram = require("../src/1_check-isogram");

describe("isIsogram", function () {
  const tester = (input, expected) => {
    it(`should return ${expected} for "${input}"`, function () {
      assert.strictEqual(isIsogram(input), expected);
    });
  };

  tester("Dermatoglyphics", true);
  tester("isogram", true);
  tester("aba", false);
  tester("moOse", false);
  tester("isIsogram", false);
  tester("", true);
});
