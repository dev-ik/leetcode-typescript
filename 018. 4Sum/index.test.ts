import { fourSum } from './index';

describe('fourSum', () => {
  const testCases = [
    {
      name: 'Case 1',
      input: { nums: [1, 0, -1, 0, -2, 2], target: 0 },
      expected: [
        [-2, -1, 1, 2],
        [-2, 0, 0, 2],
        [-1, 0, 0, 1],
      ],
    },
    {
      name: 'Case 2',
      input: { nums: [2, 2, 2, 2, 2], target: 8 },
      expected: [[2, 2, 2, 2]],
    },
    {
      name: 'Case 3',
      input: { nums: [-2, -1, -1, 1, 1, 2, 2], target: 0 },
      expected: [
        [-2, -1, 1, 2],
        [-1, -1, 1, 1],
      ],
    },
  ];

  for (const testCase of testCases) {
    test(testCase.name, () => {
      expect(fourSum(testCase.input.nums, testCase.input.target)).toEqual(
        testCase.expected,
      );
    });
  }
});
