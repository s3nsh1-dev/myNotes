/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

const { assert } = require("chai");
const solution = require("../src/7_string-ends-with");

describe("Tests", () => {
  it("should return true when the string ends with the given substring", () => {
    assert.strictEqual(solution("abcde", "cde"), true);
  });

  it("should return false when the string does not end with the given substring", () => {
    assert.strictEqual(solution("abcde", "abc"), false);
  });
});
