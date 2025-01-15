import {
  findMedianSortedArraysSolution1,
  findMedianSortedArraysSolution2,
  findMedianSortedArraysSolution3,
} from './index';

describe('findMedianSortedArrays', () => {
  const testCases = [
    {
      name: 'Case 1',
      input: { nums1: [1, 3], nums2: [2] },
      expected: 2.0,
    },
    {
      name: 'Case 2',
      input: { nums1: [1, 2], nums2: [3, 4] },
      expected: 2.5,
    },
  ];

  for (const testCase of testCases) {
    test(testCase.name, () => {
      expect(
        findMedianSortedArraysSolution1(
          testCase.input.nums1,
          testCase.input.nums2,
        ),
      ).toBe(testCase.expected);
      expect(
        findMedianSortedArraysSolution2(
          testCase.input.nums1,
          testCase.input.nums2,
        ),
      ).toBe(testCase.expected);
      expect(
        findMedianSortedArraysSolution3(
          testCase.input.nums1,
          testCase.input.nums2,
        ),
      ).toBe(testCase.expected);
    });
  }
});
