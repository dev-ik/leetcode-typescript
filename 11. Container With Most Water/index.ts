// Description:
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
//
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
//
// Return the maximum amount of water a container can store.
//
// Notice that you may not slant the container.
//
// Constraints:
//    n == height.length
//    2 <= n <= 105
//    0 <= height[i] <= 104

export const maxArea = (height: number[]): number => {
  let lp = 0;
  let rp = height.length - 1;
  let area = 0;

  for (let i = 0; i <= height.length; i++) {
    const delta = rp - lp;
    const min = Math.min(height[rp], height[lp]);
    const newArea = min * delta;

    if (newArea > area) {
      area = newArea;
    }

    height[rp] > height[lp] ? lp++ : rp--;
  }

  return area;
};
