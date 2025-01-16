// Description:
// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.
//
//The algorithm for myAtoi(string s) is as follows:
//     Whitespace: Ignore any leading whitespace (" ").
//     Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity if neither present.
//     Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
// Rounding:
// If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
//
// Return the integer as the final result.
//
// Constraints:
//    0 <= s.length <= 200
//    s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.

export const myAtoi = (s: string): number => {
  let ans = '';
  s = s.trim();

  for (const l of s) {
    if (!ans) {
      if (l.match(/\d+|\+|-/)) {
        ans += l;
      } else {
        return 0;
      }
    } else {
      if (l.match(/\d+/)) {
        ans += l;
      } else {
        if (ans.length === 1 && ans.match(/\+|-/)) {
          return 0;
        }

        break;
      }
    }
  }

  const numAns = parseInt(ans);

  if (isNaN(numAns)) {
    return 0;
  }

  const condition = numAns > 0 ? 2 ** 31 - 1 : 2 ** 31;

  if (Math.abs(numAns) > condition) {
    return numAns > 0 ? condition : -1 * condition;
  }

  return numAns;
};
