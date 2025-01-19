import { lengthOfLongestSubstring } from './index';

describe('lengthOfLongestSubstring', () => {
  const testCases = [
    {
      name: 'Case 1',
      input: 'abcabcbb',
      expected: 3,
    },
    {
      name: 'Case 2',
      input: 'bbbbb',
      expected: 1,
    },
    {
      name: 'Case 3',
      input: 'pwwkew',
      expected: 3,
    },
  ];

  for (const testCase of testCases) {
    test(testCase.name, () => {
      expect(lengthOfLongestSubstring(testCase.input)).toBe(testCase.expected);
    });
  }
});
