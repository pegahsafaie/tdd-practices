const sum = require('./sum');
const each = require("jest-each").default;
const cases = [['2, 3', 5], ['', 0], [', 2', 2], ['1,', 1]];

describe('sum', () => {
  test.each(cases)(
    "given %p argument, returns %p",
    (arg, expectedResult) => {
      expect(sum(arg)).toEqual(expectedResult);
    }
  )
  
})
