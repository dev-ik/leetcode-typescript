import { addTwoNumbers, ListNode } from './index';

describe('addTwoNumbers', () => {
  const testCases = [
    {
      name: 'Case 1',
      input: {
        l1: new ListNode(2, new ListNode(4, new ListNode(3, null))),
        l2: new ListNode(5, new ListNode(6, new ListNode(4, null))),
      },
      expected: new ListNode(7, new ListNode(0, new ListNode(8, null))),
    },
    {
      name: 'Case 2',
      input: { l1: new ListNode(0, null), l2: new ListNode(0, null) },
      expected: new ListNode(0, null),
    },
    {
      name: 'Case 3',
      input: {
        l1: new ListNode(
          9,
          new ListNode(
            9,
            new ListNode(
              9,
              new ListNode(
                9,
                new ListNode(9, new ListNode(9, new ListNode(9, null))),
              ),
            ),
          ),
        ),
        l2: new ListNode(
          9,
          new ListNode(9, new ListNode(9, new ListNode(9, null))),
        ),
      },
      expected: new ListNode(
        8,
        new ListNode(
          9,
          new ListNode(
            9,
            new ListNode(
              9,
              new ListNode(
                0,
                new ListNode(0, new ListNode(0, new ListNode(1, null))),
              ),
            ),
          ),
        ),
      ),
    },
  ];

  for (const testCase of testCases) {
    test(testCase.name, () => {
      expect(addTwoNumbers(testCase.input.l1, testCase.input.l2)).toEqual(
        testCase.expected,
      );
    });
  }
});
