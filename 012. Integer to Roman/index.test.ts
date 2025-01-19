import { intToRoman } from './index';

describe('intToRoman', () => {
  const testCases = [
    {
      name: 'Case 1',
      input: 3749,
      expected: 'MMMDCCXLIX',
    },
    {
      name: 'Case 2',
      input: 58,
      expected: 'LVIII',
    },
    {
      name: 'Case 3',
      input: 1994,
      expected: 'MCMXCIV',
    },
  ];

  for (const testCase of testCases) {
    test(testCase.name, () => {
      expect(intToRoman(testCase.input)).toBe(testCase.expected);
    });
  }
});
