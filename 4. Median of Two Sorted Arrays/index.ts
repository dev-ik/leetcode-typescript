// Condition of the task:
// Given two sorted arrays nums1 and nums2 of size m and n respectively,
// return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).
export const findMedianSortedArraysSolution1 = (
  nums1: number[],
  nums2: number[],
): number => {
  const m = nums1.length;
  const n = nums2.length;
  const f = (i: number, j: number, k: number): number => {
    if (i >= m) {
      return nums2[j + k - 1];
    }
    if (j >= n) {
      return nums1[i + k - 1];
    }
    if (k == 1) {
      return Math.min(nums1[i], nums2[j]);
    }
    const p = Math.floor(k / 2);
    const x = i + p - 1 < m ? nums1[i + p - 1] : 1;
    const y = j + p - 1 < n ? nums2[j + p - 1] : 1;
    return x < y ? f(i + p, j, k - p) : f(i, j + p, k - p);
  };
  const a = f(0, 0, Math.floor((m + n + 1) / 2));
  const b = f(0, 0, Math.floor((m + n + 2) / 2));
  return (a + b) / 2;
};

export const findMedianSortedArraysSolution2 = (
  nums1: number[],
  nums2: number[],
): number => {
  if (nums2.length < nums1.length) {
    return findMedianSortedArraysSolution2(nums2, nums1);
  }

  let start = 0;
  let end = nums1.length;
  while (start <= end) {
    const partitionX = Math.floor((start + end) / 2);
    const partitionY =
      Math.floor((nums1.length + nums2.length + 1) / 2) - partitionX;

    const maxX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
    const minX = partitionX === nums1.length ? Infinity : nums1[partitionX];

    const maxY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
    const minY = partitionY === nums2.length ? Infinity : nums2[partitionY];

    if (maxX <= minY && maxY <= minX) {
      if ((nums1.length + nums2.length) % 2 === 0) {
        return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
      } else {
        return Math.max(maxX, maxY);
      }
    } else if (maxX > minY) {
      end = partitionX - 1;
    } else {
      start = partitionX + 1;
    }
  }

  return -1;
};

export const findMedianSortedArraysSolution3 = (
  nums1: number[],
  nums2: number[],
): number => {
  const merged = [...nums1, ...nums2].sort((a, b) => a - b);
  const length = merged.length;
  const middle = Math.floor(length / 2);
  return length % 2 === 0
    ? (merged[middle] + merged[middle - 1]) / 2
    : merged[middle];
};
