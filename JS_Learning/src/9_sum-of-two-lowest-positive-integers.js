function sumTwoSmallestNumbers(numbers) {
  // Code here
  numbers.sort((a, b) => a - b);
  const first = numbers[0];
  const second = numbers[1];
  return first + second;
}
module.exports = sumTwoSmallestNumbers;
