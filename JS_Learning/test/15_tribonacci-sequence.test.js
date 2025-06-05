/*
### Problem: Tribonacci Sequence

Meet the **Tribonacci sequence** — a variation of the famous Fibonacci sequence. Instead of summing the last **two** numbers to generate the next one, the Tribonacci sequence sums the last **three**.

#### How It Works:

Given a starting array of **three numbers** (called the **signature**), generate a sequence where each subsequent number is the sum of the previous three.

**Example 1:**
Signature: `[1, 1, 1]`
Tribonacci sequence:
`[1, 1, 1, 3, 5, 9, 17, 31, ...]`

**Example 2:**
Signature: `[0, 0, 1]`
Tribonacci sequence:
`[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]`
*Note:* This is not just a shifted version of the Fibonacci sequence. The behavior changes significantly when using different initial values.

---

### Task:

Write a function that takes:

* A list of **three numbers** (`signature`) to seed the sequence.
* A non-negative integer `n` representing the total number of elements to return.

The function should return the **first `n` elements** of the Tribonacci sequence, starting with the signature.

---

### Constraints:

* The `signature` will always contain **exactly three numbers**.
* `n` will always be a **non-negative integer**.
* If `n == 0`, return an empty list (`[]`).
  *(In C, return `NULL` instead.)*

*/

const { assert, config } = require("chai");
const tribonacci = require("../src/15_tribonacci-sequence");

config.truncateThreshold = 0;

describe("Basic tests", function () {
  function doTest(input, expected) {
    let [sig, len] = input;
    it(`Testing signature=[${sig}], n=${len}`, () => {
      assert.deepEqual(tribonacci(sig, len), expected);
    });
  }

  doTest([[1, 1, 1], 10], [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]);
  doTest([[0, 0, 1], 10], [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]);
  doTest([[0, 1, 1], 10], [0, 1, 1, 2, 4, 7, 13, 24, 44, 81]);
  doTest([[1, 0, 0], 10], [1, 0, 0, 1, 1, 2, 4, 7, 13, 24]);
  doTest([[0, 0, 0], 10], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  doTest([[1, 2, 3], 10], [1, 2, 3, 6, 11, 20, 37, 68, 125, 230]);
  doTest([[3, 2, 1], 10], [3, 2, 1, 6, 9, 16, 31, 56, 103, 190]);
  doTest([[1, 1, 1], 1], [1]);

  doTest([[300, 200, 100], 0], []);
});
