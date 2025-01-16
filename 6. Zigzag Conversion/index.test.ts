import { convert } from './index';

describe('convert', () => {
  const testCases = [
    {
      name: 'Case 1',
      input: { s: 'PAYPALISHIRING', nr: 4 },
      expected: 'PINALSIGYAHRPI',
    },
    {
      name: 'Case 2',
      input: { s: 'A', nr: 1 },
      expected: 'A',
    },
  ];

  for (const testCase of testCases) {
    test(testCase.name, () => {
      expect(convert(testCase.input.s, testCase.input.nr)).toBe(
        testCase.expected,
      );
    });
  }
});
