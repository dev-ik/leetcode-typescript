// Description:
// Write a function to find the longest common prefix string amongst an array of strings.
//
// If there is no common prefix, return an empty string "".
//
// Constraints:
//   1 <= strs.length <= 200
//   0 <= strs[i].length <= 200
//  strs[i] consists of only lowercase English letters if it is non-empty

export const romanToInt = (s: string): number => {
  const obj: { [p: string]: number } = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let sum = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (obj[`${s[i - 1]}${s[i]}`]) {
      sum = sum + obj[`${s[i - 1]}${s[i]}`];
      i--;
    } else {
      sum = sum + obj[s[i]];
    }
  }

  return sum;
};
