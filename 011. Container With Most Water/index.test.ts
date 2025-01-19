import { maxArea } from './index';

describe('maxArea', () => {
  const testCases = [
    {
      name: 'Case 1',
      input: [1, 8, 6, 2, 5, 4, 8, 3, 7],
      expected: 49,
    },
    {
      name: 'Case 2',
      input: [1, 1],
      expected: 1,
    },
  ];

  for (const testCase of testCases) {
    test(testCase.name, () => {
      expect(maxArea(testCase.input)).toBe(testCase.expected);
    });
  }
});
