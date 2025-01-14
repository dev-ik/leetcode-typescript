// Condition of the task:
// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.
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
