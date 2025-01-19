// Description:
// Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:
//    '.' Matches any single character.
//    '*' Matches zero or more of the preceding element.
//The matching should cover the entire input string (not partial).
//
// Constraints:
//    1 <= s.length <= 20
//    1 <= p.length <= 20
//    s contains only lowercase English letters.
//    p contains only lowercase English letters, '.', and '*'.
//It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.

export const isMatch = (s: string, p: string): boolean => {
  const columns = s.length;
  const rows = p.length;
  const arr = Array.from({ length: columns + 1 }, () =>
    Array(rows + 1).fill(false),
  );

  arr[0][0] = true;

  for (let i = 0; i <= columns; ++i) {
    for (let j = 1; j <= rows; ++j) {
      if (p[j - 1] === '*') {
        arr[i][j] = arr[i][j - 2];
        if (i && (p[j - 2] === '.' || p[j - 2] === s[i - 1])) {
          arr[i][j] |= arr[i - 1][j];
        }
      } else if (i && (p[j - 1] === '.' || p[j - 1] === s[i - 1])) {
        arr[i][j] = arr[i - 1][j - 1];
      }
    }
  }
  return Boolean(arr[columns][rows]);
};
