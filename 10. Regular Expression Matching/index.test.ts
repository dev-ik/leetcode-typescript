import { isMatch } from './index';

describe('isMatch', () => {
  const testCases = [
    {
      name: 'Case 1',
      input: { s: 'aa', p: 'a' },
      expected: false,
    },
    {
      name: 'Case 2',
      input: { s: 'aa', p: 'a*' },
      expected: true,
    },
    {
      name: 'Case 3',
      input: { s: 'ab', p: '.*' },
      expected: true,
    },
    {
      name: 'Case 4',
      input: { s: 'aab', p: 'c*a*b' },
      expected: true,
    },
    {
      name: 'Case 5',
      input: { s: 'mississippi', p: 'mis*is*p*.' },
      expected: false,
    },
  ];

  for (const testCase of testCases) {
    test(testCase.name, () => {
      expect(isMatch(testCase.input.s, testCase.input.p)).toBe(
        testCase.expected,
      );
    });
  }
});
