/**
 * @param {null}
 * @returns {string}
 */

export function mainFunction() {
  console.log("I am main.js");
  return "I am main.js";
}
mainFunction();

// command to run testcases using mocha = " npx mocha test/<filename.test.js> "
// example: npx mocha test/1_check-isogram.test.js
// npm run test will look for all test.js and run them all, not what i want
