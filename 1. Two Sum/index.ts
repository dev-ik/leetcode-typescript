// Description:
// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.
// Constraints:
//    2 <= nums.length <= 104
//    -109 <= nums[i] <= 109
//    -109 <= target <= 109
// Only one valid answer exists.
//
// Follow-up:
// Can you come up with an algorithm that is less than O(n2) time complexity?

export const twoSum = (nums: number[], target: number): number[] => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complete = target - nums[i];

    if (map.has(complete)) {
      return [map.get(complete), i];
    }

    map.set(nums[i], i);
  }

  return [];
};
