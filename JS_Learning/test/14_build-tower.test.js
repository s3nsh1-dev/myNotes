/*
### Problem: Build a Tower

Given a positive integer `n` representing the number of floors, build a **pyramid-shaped tower** as an array (or list) of strings.
Each floor of the tower is made of `"*"` characters, centered horizontally.

The tower should be returned as a list of strings, where each string represents one floor, from top to bottom.

### Rules:

* The top floor has 1 `"*"` character.
* Each subsequent floor increases the number of `"*"`s by 2.
* Each floor must be centered with spaces so that the tower is symmetric.

### Examples:

**Input:** `n = 3`
**Output:**

```javascript
[
  "  *  ",
  " *** ",
  "*****"
]
```

**Input:** `n = 6`
**Output:**

```javascript
[
  "     *     ",
  "    ***    ",
  "   *****   ",
  "  *******  ",
  " ********* ",
  "***********"
]
*/
const { expect } = require("chai");
const towerBuilder = require("../src/14_build-tower");

describe("Build Tower", () => {
  it("should build a tower with 1 floor", () => {
    expect(towerBuilder(1)).to.deep.equal(["*"]);
  });

  it("should build a tower with 2 floors", () => {
    expect(towerBuilder(2)).to.deep.equal([" * ", "***"]);
  });

  it("should build a tower with 3 floors", () => {
    expect(towerBuilder(3)).to.deep.equal(["  *  ", " *** ", "*****"]);
  });
});
