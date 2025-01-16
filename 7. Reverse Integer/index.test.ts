import { reverse } from './index';

describe('reverse', () => {
  const testCases = [
    {
      name: 'Case 1',
      input: 123,
      expected: 321,
    },
    {
      name: 'Case 2',
      input: -123,
      expected: -321,
    },
    {
      name: 'Case 3',
      input: 120,
      expected: 21,
    },
  ];

  for (const testCase of testCases) {
    test(testCase.name, () => {
      expect(reverse(testCase.input)).toBe(testCase.expected);
    });
  }
});
