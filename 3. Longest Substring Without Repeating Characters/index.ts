// Description:
// Given a string s, find the length of the longest substring without repeating characters.
//
// Constraints:
//    0 <= s.length <= 5 * 104
//    s consists of English letters, digits, symbols and spaces.

export const lengthOfLongestSubstring = (s: string): number => {
  const n = s.length;
  let ans = 0,
    i = 0,
    j = 0;
  const set = new Set();

  while (i < n && j < n) {
    if (!set.has(s[j])) {
      set.add(s[j++]);
      ans = Math.max(ans, j - i);
    } else {
      set.delete(s[i++]);
    }
  }

  return ans;
};
