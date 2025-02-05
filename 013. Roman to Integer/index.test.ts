import { romanToInt } from './index';

describe('romanToInt', () => {
  const testCases = [
    {
      name: 'Case 1',
      input: 'MMMDCCXLIX',
      expected: 3749,
    },
    {
      name: 'Case 2',
      input: 'LVIII',
      expected: 58,
    },
    {
      name: 'Case 3',
      input: 'MCMXCIV',
      expected: 1994,
    },
  ];

  for (const testCase of testCases) {
    test(testCase.name, () => {
      expect(romanToInt(testCase.input)).toBe(testCase.expected);
    });
  }
});
