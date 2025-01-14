import { twoSum } from './index';

describe('twoSum', () => {
  const testCases = [
    {
      name: 'Case 1',
      input: { numbers: [2, 7, 11, 15], target: 9 },
      expected: [0, 1],
    },
    {
      name: 'Case 2',
      input: { numbers: [3, 2, 4], target: 6 },
      expected: [1, 2],
    },
    {
      name: 'Case 3',
      input: { numbers: [3, 3], target: 6 },
      expected: [0, 1],
    },
    {
      name: 'Case 4',
      input: { numbers: [3, 0, 9], target: 22 },
      expected: [],
    },
    {
      name: 'Case 5',
      input: { numbers: [1], target: 1 },
      expected: [],
    },
  ];

  for (const testCase of testCases) {
    test(testCase.name, () => {
      expect(twoSum(testCase.input.numbers, testCase.input.target)).toEqual(
        testCase.expected,
      );
    });
  }
});
