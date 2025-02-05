import { threeSum } from './index';

describe('threeSum', () => {
  const testCases = [
    {
      name: 'Case 1',
      input: [-1, 0, 1, 2, -1, -4],
      expected: [
        [-1, -1, 2],
        [-1, 0, 1],
      ],
    },
    {
      name: 'Case 2',
      input: [-1, 2, -1, 1, 1, 2, -1, -4],
      expected: [
        [-4, 2, 2],
        [-1, -1, 2],
      ],
    },
    {
      name: 'Case 3',
      input: [0, 1, 1],
      expected: [],
    },
    {
      name: 'Case 4',
      input: [0, 0, 0],
      expected: [[0, 0, 0]],
    },
  ];

  for (const testCase of testCases) {
    test(testCase.name, () => {
      expect(threeSum(testCase.input)).toEqual(testCase.expected);
    });
  }
});
