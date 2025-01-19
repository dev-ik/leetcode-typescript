// Description:
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
// ################
//  P   A   H   N
//  A P L S I I G
//  Y   I   R
// ################
// And then read line by line: "PAHNAPLSIIGYIR"
//
// Write the code that will take a string and make this conversion given a number of rows:
// ##########################################
//   string convert(string s, int numRows);
// ##########################################
//
// Constraints:
//    1 <= s.length <= 1000
//    s consists of English letters (lower-case and upper-case), ',' and '.'.
//    1 <= numRows <= 1000

export const convert = (s: string, numRows: number): string => {
  if (numRows === 1) {
    return s;
  }

  const ans: string[][] = new Array(numRows).fill(0).map(() => []);

  let i = 0;
  let k = -1;

  for (const l of s) {
    ans[i].push(l);

    if (i === numRows - 1 || i === 0) {
      k = -k;
    }

    i += k;
  }

  return ans.flat().join('');
};
