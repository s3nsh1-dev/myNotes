/*
### Problem: Create an N x N Spiral Matrix

Your task is to generate an **N x N spiral matrix**, following a specific pattern.

The spiral starts at the top-left corner and winds inward using **1s**, forming a path that **never touches itself**, even diagonally. The rest of the matrix is filled with **0s**.

---

### Requirements:

* Input: A single integer `N` (where `N ≥ 5`)
* Output: A 2D array (array of arrays) representing the spiral:

  * The path is marked with **1s**
  * The background is filled with **0s**
  * The first row is always filled with 1s (i.e., starts left to right)

---

### Example:

**Input:** `N = 5`
**Output:**

```javascript
[
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1],
  [1, 1, 1, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1]
]
```

**Input:** `N = 10`
**Output:**

```javascript
[
  [1,1,1,1,1,1,1,1,1,1],
  [0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,0,1],
  [1,0,0,0,0,0,0,1,0,1],
  [1,0,1,1,1,1,0,1,0,1],
  [1,0,1,0,0,1,0,1,0,1],
  [1,0,1,0,0,0,0,1,0,1],
  [1,1,1,1,1,1,1,1,0,1],
  [0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1]
]
```

---

### Notes:

* The spiral is continuous and winds inward without touching itself.
* The minimum allowed size is `5`, to avoid ambiguity or edge cases with tiny grids.
* The result must be a **2D array of 0s and 1s**, not a string or printed pattern.
[
    ["0", "0", "0", "0", "0", "0", "0", "0"],
    [".", ".", ".", ".", ".", ".", ".", "0"],
    ["0", "0", "0", "0", "0", "0", ".", "0"],
    ["0", ".", ".", ".", ".", "0", ".", "0"],
    ["0", ".", "0", ".", ".", "0", ".", "0"],
    ["0", ".", "0", "0", "0", "0", ".", "0"],
    ["0", ".", ".", ".", ".", ".", ".", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0"],
  ]
*/

const chai = require("chai");
const spiralize = require("../src/17_make-a-spiral");

chai.config.truncateThreshold = 0;
const deepEqual = chai.assert.deepEqual;

function doTest(n, expected) {
  const actual = spiralize(n);
  deepEqual(actual, expected, `for n = ${n}:\n`);
}

describe("Tests suite", () => {
  it("sample tests", () => {
    doTest(5, [
      [1, 1, 1, 1, 1],
      [0, 0, 0, 0, 1],
      [1, 1, 1, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1],
    ]);
    doTest(8, [
      [1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 0, 0, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
    ]);
  });
});
