import { longestPalindrome } from './index';

describe('longestPalindrome', () => {
  const testCases = [
    {
      name: 'Case 1',
      input: 'babad',
      expected: 'bab',
    },
    {
      name: 'Case 2',
      input: 'cbbd',
      expected: 'bb',
    },
    {
      name: 'Case 3',
      input: 'aacabdkacaa',
      expected: 'aca',
    },
  ];

  for (const testCase of testCases) {
    test(testCase.name, () => {
      expect(longestPalindrome(testCase.input)).toBe(testCase.expected);
    });
  }
});
