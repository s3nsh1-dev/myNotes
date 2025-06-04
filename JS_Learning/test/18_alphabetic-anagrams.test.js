/*
Question:
Consider a "word" as any sequence of capital letters A-Z (not limited to just "dictionary words"). For any word with at least two different letters, there are other words composed of the same letters but in a different order (for instance, STATIONARILY/ANTIROYALIST, which happen to both be dictionary words; for our purposes "AAIILNORSTTY" is also a "word" composed of the same letters as these two).

We can then assign a number to every word, based on where it falls in an alphabetically sorted list of all words made up of the same group of letters. One way to do this would be to generate the entire list of words and find the desired one, but this would be slow if the word is long.

Given a word, return its number. Your function should be able to accept any word 25 letters or less in length (possibly with some letters repeated), and take no more than 500 milliseconds to run. To compare, when the solution code runs the 27 test cases in JS, it takes 101ms.

For very large words, you'll run into number precision issues in JS (if the word's position is greater than 2^53). For the JS tests with large positions, there's some leeway (.000000001%). If you feel like you're getting it right for the smaller ranks, and only failing by rounding on the larger, submit a couple more times and see if it takes.

Python, Java and Haskell have arbitrary integer precision, so you must be precise in those languages (unless someone corrects me).

C# is using a long, which may not have the best precision, but the tests are locked so we can't change it.

Sample words, with their rank:
ABAB = 2
AAAB = 1
BAAA = 4
QUESTION = 24572
BOOKKEEPER = 10743

*/

const { expect } = require("chai");

describe("Anagram", function () {
  const testValues = {
    A: 1,
    ABAB: 2,
    AAAB: 1,
    BAAA: 4,
    QUESTION: 24572,
    BOOKKEEPER: 10743,
  };

  it("should return correct list position for known inputs", function () {
    for (const word in testValues) {
      if (Object.prototype.hasOwnProperty.call(testValues, word)) {
        const expected = testValues[word];
        const actual = listPosition(word);
        expect(actual).to.equal(
          expected,
          `Incorrect list position for: ${word}`
        );
      }
    }
  });
});

/*
function listPosition(word) {
    // Convert word to array for easier manipulation
    const letters = word.split('');
    const n = letters.length;
    
    // Count frequency of each letter
    const freq = {};
    for (let letter of letters) {
        freq[letter] = (freq[letter] || 0) + 1;
    }
    
    // Precompute factorials to avoid recalculation
    const fact = [1];
    for (let i = 1; i <= n; i++) {
        fact[i] = fact[i-1] * i;
    }
    
    // Function to calculate multinomial coefficient
    // n! / (n1! * n2! * ... * nk!)
    function multinomial(total, frequencies) {
        let result = fact[total];
        for (let count of Object.values(frequencies)) {
            result /= fact[count];
        }
        return result;
    }
    
    let rank = 0;
    
    // For each position in the word
    for (let i = 0; i < n; i++) {
        const currentLetter = letters[i];
        
        // Count letters that come before current letter alphabetically
        for (let letter in freq) {
            if (letter < currentLetter && freq[letter] > 0) {
                // Create a copy of frequencies for this scenario
                const tempFreq = {...freq};
                tempFreq[letter]--; // Use one instance of this letter
                
                // Calculate how many arrangements are possible with remaining letters
                const remaining = n - i - 1;
                const arrangements = multinomial(remaining, tempFreq);
                
                rank += arrangements;
            }
        }
        
        // Remove current letter from frequency count
        freq[currentLetter]--;
        if (freq[currentLetter] === 0) {
            delete freq[currentLetter];
        }
    }
    
    // Return 1-indexed rank
    return rank + 1;
}

// Test cases
console.log("ABAB =", listPosition("ABAB")); // Expected: 2
console.log("AAAB =", listPosition("AAAB")); // Expected: 1  
console.log("BAAA =", listPosition("BAAA")); // Expected: 4
console.log("QUESTION =", listPosition("QUESTION")); // Expected: 24572
console.log("BOOKKEEPER =", listPosition("BOOKKEEPER")); // Expected: 10743
*/
