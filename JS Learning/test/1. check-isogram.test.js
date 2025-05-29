const { assert } = require("chai");
const isIsogram = require("./1. check-isogram.js");

describe("isIsogram", function () {
  it("Sample tests", function () {
    tester("Dermatoglyphics", true);
    tester("isogram", true);
    tester("aba", false);
    tester("moOse", false);
    tester("isIsogram", false);
    tester("", true);
  });

  function tester(input, expected) {
    assert.strictEqual(
      isIsogram(input),
      expected,
      `Failed for input: "${input}"`
    );
  }
});
