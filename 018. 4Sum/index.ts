// Description:
// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
//
//    0 <= a, b, c, d < n
//    a, b, c, and d are distinct.
//    nums[a] + nums[b] + nums[c] + nums[d] == target
//
// You may return the answer in any order.

// Constraints:
//    1 <= nums.length <= 200
//    -109 <= nums[i] <= 109
//    -109 <= target <= 109

export const fourSum = (nums: number[], target: number): number[][] => {
  nums.sort((a, b) => a - b);
  const l = nums.length;
  const res: number[][] = [];

  for (let i = 0; i < l - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    for (let j = i + 1; j < l - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      let left = j + 1;
      let right = l - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          right--;
          while (nums[left] === nums[left - 1]) {
            left++;
          }
          while (nums[right] === nums[right + 1]) {
            right--;
          }
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return res;
};
