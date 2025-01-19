import { isPalindromeSolution1, isPalindromeSolution2 } from './index';

describe('isPalindromeSolutions', () => {
  const testCases = [
    {
      name: 'Case 1',
      input: 121,
      expected: true,
    },
    {
      name: 'Case 2',
      input: -121,
      expected: false,
    },
    {
      name: 'Case 3',
      input: 10,
      expected: false,
    },
  ];

  for (const testCase of testCases) {
    test(testCase.name, () => {
      expect(isPalindromeSolution1(testCase.input)).toBe(testCase.expected);
    });
  }
  for (const testCase of testCases) {
    test(testCase.name, () => {
      expect(isPalindromeSolution2(testCase.input)).toBe(testCase.expected);
    });
  }
});
