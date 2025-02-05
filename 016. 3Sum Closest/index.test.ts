import { threeSumClosest } from './index';

describe('threeSum', () => {
  const testCases = [
    {
      name: 'Case 1',
      input: { nums: [-1, 2, 1, -4], target: 1 },
      expected: 2,
    },
    {
      name: 'Case 2',
      input: { nums: [0, 0, 0], target: 1 },
      expected: 0,
    },
  ];

  for (const testCase of testCases) {
    test(testCase.name, () => {
      expect(
        threeSumClosest(testCase.input.nums, testCase.input.target),
      ).toEqual(testCase.expected);
    });
  }
});
