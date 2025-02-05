// Description:
// Write a function to find the longest common prefix string amongst an array of strings.
//
// If there is no common prefix, return an empty string "".
//
// Constraints:
//   1 <= strs.length <= 200
//   0 <= strs[i].length <= 200
//   strs[i] consists of only lowercase English letters if it is non-empty

export const longestCommonPrefix = (strs: string[]): string => {
  if (strs.length === 0) return '';
  let i = 0;
  while (strs[0].length) {
    const prefix = strs[0].slice(0, strs[0].length - i++);
    if (strs.every((str) => str.startsWith(prefix))) {
      return prefix;
    }
  }

  return '';
};
