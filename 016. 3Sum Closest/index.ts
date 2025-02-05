// Description:
// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
//
// Return the sum of the three integers.
//
// You may assume that each input would have exactly one solution.

// Constraints:
//    3 <= nums.length <= 500
//    -1000 <= nums[i] <= 1000
//    -104 <= target <= 104

export const threeSumClosest = (nums: number[], target: number): number => {
  nums.sort((a, b) => a - b);
  let closest = -Infinity;
  const l = nums.length;

  for (let i = 0; i < l; i++) {
    let left = i + 1;
    let right = l - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === target) {
        return sum;
      }

      if (Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum;
      }

      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closest;
};
