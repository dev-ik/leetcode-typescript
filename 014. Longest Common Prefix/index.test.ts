import { longestCommonPrefix } from './index';

describe('longestCommonPrefix', () => {
  const testCases = [
    {
      name: 'Case 1',
      input: ['flower', 'flow', 'flight'],
      expected: 'fl',
    },
    {
      name: 'Case 2',
      input: ['dog', 'racecar', 'car'],
      expected: '',
    },
    {
      name: 'Case 3',
      input: [],
      expected: '',
    },
  ];

  for (const testCase of testCases) {
    test(testCase.name, () => {
      expect(longestCommonPrefix(testCase.input)).toBe(testCase.expected);
    });
  }
});
