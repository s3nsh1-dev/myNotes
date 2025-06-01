/*
### Problem Statement:

Some numbers have an interesting mathematical property.

For example:

* **89** → 8¹ + 9² = 89 × 1
* **695** → 6² + 9³ + 5⁴ = 1390 = 695 × 2
* **46288** → 4³ + 6⁴ + 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 × 51

Given two positive integers `n` and `p`, your task is to determine whether there exists a **positive integer `k`** such that the **sum of the digits of `n` raised to consecutive powers starting from `p` equals `k × n`**.

### More Formally:

Let `n` have digits: a, b, c, d, ...
Compute the sum:
**aᵖ + bᵖ⁺¹ + cᵖ⁺² + dᵖ⁺³ + ...**
If this sum equals `k × n` for some integer `k`, return `k`. Otherwise, return `-1`.

### Input Constraints:

* `n` and `p` are strictly positive integers.

### Examples:

```txt
n = 89,    p = 1  --> returns 1  (since 8¹ + 9² = 89 = 89 × 1)  
n = 92,    p = 1  --> returns -1 (since 9¹ + 2² ≠ 92 × k for any integer k)  
n = 695,   p = 2  --> returns 2  (since 6² + 9³ + 5⁴ = 1390 = 695 × 2)  
n = 46288, p = 3  --> returns 51 (since 4³ + 6⁴ + 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 × 51)

*/
const assert = require("chai").assert;
const digPow = require("../src/13_playing-with-digits");

describe("digPow", () => {
  it("digPow(89, 1) should return 1", () => {
    assert.strictEqual(digPow(89, 1), 1, `Incorrect answer for digPow(89, 1)`);
  });

  it("digPow(92, 1) should return -1", () => {
    assert.strictEqual(digPow(92, 1), -1, `Incorrect answer for digPow(92, 1)`);
  });

  it("digPow(46288, 3) should return 51", () => {
    assert.strictEqual(
      digPow(46288, 3),
      51,
      `Incorrect answer for digPow(46288, 3)`
    );
  });
});
