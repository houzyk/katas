const { expect } = require('@jest/globals');
const modify = require('./exercise');

describe("Consecutive String Count Test Suite", () => {
  it("should return an empty string when given an empty string", () => {
    const output = modify("");
    expect(output).toEqual("");
  });
  // TODO
  // console.log(modify("aaabbbaaccaz"));
  // console.log(modify("abcdz"));
  // console.log(modify(""));
  // console.log(modify("bbbbbbaaaaz"));
  // console.log(modify("zzzaazzzaaazzzzzzzzzza"));
})
