// Description:
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
//
// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
//
// Constraints:
//   0 <= digits.length <= 4
//   digits[i] is a digit in the range ['2', '9'].
export const letterCombinations = (digits: string): string[] => {
  const digitToLettersMap: { [digit: string]: string[] } = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  };
  const ans: string[] = [];
  const l = digits.length;
  if (!l) {
    return ans;
  }
  if (l === 1) {
    return digitToLettersMap[digits];
  }

  for (let i = 0; i < l; i++) {
    const digit = digits[i];
    const letters = digitToLettersMap[digit];
    if (!ans.length) {
      ans.push(...letters);
    } else {
      const temp: string[] = [];
      for (const letter of letters) {
        for (const str of ans) {
          temp.push(str + letter);
        }
      }
      ans.length = 0;
      ans.push(...temp);
    }
  }

  return ans;
};
