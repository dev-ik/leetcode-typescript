// Description:
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Constraints:
//  1 <= s.length <= 104
//  s consists of parentheses only '()[]{}'.

export const isValid = (s: string): boolean => {
  if (s.length < 2) {
    return false;
  }
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
    } else {
      const last = stack.pop();
      if (
        (s[i] === ')' && last !== '(') ||
        (s[i] === ']' && last !== '[') ||
        (s[i] === '}' && last !== '{')
      ) {
        return false;
      }
    }
  }

  return !stack.length;
};
