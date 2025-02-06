import { isValid } from './index';

describe('isValid', () => {
  const testCases = [
    {
      name: 'Case 1',
      input: '()',
      expected: true,
    },
    {
      name: 'Case 2',
      input: '()[]{}',
      expected: true,
    },
    {
      name: 'Case 3',
      input: '(]',
      expected: false,
    },
    {
      name: 'Case 4',
      input: '(',
      expected: false,
    },
    {
      name: 'Case 5',
      input: '((',
      expected: false,
    },
    {
      name: 'Case 6',
      input: '([])',
      expected: true,
    },
  ];

  for (const testCase of testCases) {
    test(testCase.name, () => {
      expect(isValid(testCase.input)).toEqual(testCase.expected);
    });
  }
});
