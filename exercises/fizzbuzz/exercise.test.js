const { it, expect } = require('@jest/globals');
const fizzBuzz = require('./exercise');

describe("FizzBuzz Test Suite", () => {
  it("should output the correct results for a short and simple array", () => {
    const output = fizzBuzz([1, 2, 3, 4, 5, 15]);
    expect(output).toEqual([1, 2, "Fizz", 4, "Buzz", "FizzBuzz"]);
  });
});
