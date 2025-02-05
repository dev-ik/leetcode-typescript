// Description:
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
//
// Notice that the solution set must not contain duplicate triplets.

// Constraints:
//    3 <= nums.length <= 3000
//    -105 <= nums[i] <= 105

export const threeSum = (nums: number[]): number[][] => {
  const l = nums.length;
  const res = [];
  nums.sort((a, b) => a - b);

  for (let first = 0; first < l - 2; first++) {
    if (first > 0 && nums[first] === nums[first - 1]) continue;
    let second = first + 1;
    let third = l - 1;

    while (second < third) {
      const sum = nums[first] + nums[second] + nums[third];
      if (sum === 0) {
        res.push([nums[first], nums[second], nums[third]]);
        while (nums[second] === nums[second + 1]) second++;
        while (nums[third] === nums[third - 1]) third--;
        second++;
        third--;
      } else if (sum < 0) {
        second++;
      } else {
        third--;
      }
    }
  }
  return res;
};
