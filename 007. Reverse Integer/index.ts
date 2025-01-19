// Description:
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
//
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
//
// Constraints:
//    -231 <= x <= 231 - 1
export const reverse = (x: number): number => {
  const reverseNumber = parseInt(
    Math.abs(x).toString().split('').reverse().join(''),
  );

  const condition = x > 0 ? 2 ** 31 - 1 : 2 ** 31;

  if (reverseNumber > condition) {
    return 0;
  }

  return x > 0 ? reverseNumber : -1 * reverseNumber;
};
