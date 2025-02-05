import { letterCombinations } from './index';

describe('letterCombinations', () => {
  const testCases = [
    {
      name: 'Case 1',
      input: '23',
      expected: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'],
    },
    {
      name: 'Case 2',
      input: '',
      expected: [],
    },
    {
      name: 'Case 3',
      input: '2',
      expected: ['a', 'b', 'c'],
    },
  ];

  for (const testCase of testCases) {
    test(testCase.name, () => {
      expect(letterCombinations(testCase.input).sort()).toBe(testCase.expected);
    });
  }
});
