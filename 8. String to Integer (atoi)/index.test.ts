import { myAtoi } from './index';

describe('myAtoi', () => {
  const testCases = [
    {
      name: 'Case 1',
      input: '42',
      expected: 42,
    },
    {
      name: 'Case 2',
      input: '   -042',
      expected: -42,
    },
    {
      name: 'Case 3',
      input: '1337c0d3',
      expected: 1337,
    },
    {
      name: 'Case 4',
      input: '0-1',
      expected: 0,
    },
    {
      name: 'Case 5',
      input: '"words and 987"',
      expected: 0,
    },
    {
      name: 'Case 6',
      input: '-91283472332',
      expected: -2147483648,
    },
    {
      name: 'Case 7',
      input: '+-12',
      expected: 0,
    },
    {
      name: 'Case 8',
      input: '  -0012a42',
      expected: -12,
    },
  ];

  for (const testCase of testCases) {
    test(testCase.name, () => {
      expect(myAtoi(testCase.input)).toBe(testCase.expected);
    });
  }
});
