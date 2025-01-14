// Condition of the task:
// Given a string s, find the length of the longest substring without repeating characters.
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