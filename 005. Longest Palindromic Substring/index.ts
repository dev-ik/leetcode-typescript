// Description:
// Given a string s, return the longest palindromic substring  in s.
//
// Constraints:
//    1 <= s.length <= 1000
//    s consist of only digits and English letters.

const processString = (s: string): string => {
  let res = '';

  for (let i = 0; i < s.length; i++) {
    res += `#${s[i]}`;
  }

  return res + '#';
};

const min = (a: number, b: number): number => (a < b ? a : b);
export const longestPalindrome = (s: string): string => {
  const processedString = processString(s);
  const n = processedString.length;
  const P = new Array(n).fill(0);
  let C = 0,
    R = 0;

  for (let i = 0; i < n - 1; i++) {
    const mirror = 2 * C - i;

    if (i < R) {
      P[i] = min(R - i, P[mirror]);
    } else {
      P[i] = 0;
    }

    while (
      i + 1 + P[i] < n &&
      i - 1 - P[i] >= 0 &&
      processedString[i + 1 + P[i]] === processedString[i - 1 - P[i]]
    ) {
      P[i]++;
    }

    if (i + P[i] > R) {
      C = i;
      R = i + P[i];
    }
  }
  let maxLen = 0;
  let centerIndex = 0;
  for (let i = 0; i < n; i++) {
    if (P[i] > maxLen) {
      maxLen = P[i];
      centerIndex = i;
    }
  }

  const start = (centerIndex - maxLen) / 2;
  const end = start + maxLen;
  return s.slice(start, end);
};
