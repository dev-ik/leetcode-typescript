// Description:
// Given an integer x, return true if x is a palindrome, and false otherwise.
//
// Constraints:
//    0 <= s.length <= 200
//    s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.

export const isPalindromeSolution1 = (x: number): boolean =>
  x.toString() === x.toString().split('').reverse().join('');

export const isPalindromeSolution2 = (x: number): boolean => {
  if (x < 0 || (x > 0 && x % 10 === 0)) {
    return false;
  }
  let y = 0;
  for (; y < x; x = ~~(x / 10)) {
    y = y * 10 + (x % 10);
  }
  return x === y || x === ~~(y / 10);
};
