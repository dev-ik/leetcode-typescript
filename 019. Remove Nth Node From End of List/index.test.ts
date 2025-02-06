import { ListNode, removeNthFromEnd } from './index';

describe('removeNthFromEnd', () => {
  const testCases = [
    {
      name: 'Case 1',
      input: {
        list: new ListNode(
          1,
          new ListNode(
            2,
            new ListNode(3, new ListNode(4, new ListNode(5, null))),
          ),
        ),
        target: 2,
      },
      expected: new ListNode(
        1,
        new ListNode(2, new ListNode(3, new ListNode(5, null))),
      ),
    },
    {
      name: 'Case 2',
      input: {
        list: new ListNode(1, null),
        target: 1,
      },
      expected: null,
    },
    {
      name: 'Case 3',
      input: {
        list: new ListNode(1, new ListNode(2, null)),
        target: 1,
      },
      expected: new ListNode(1, null),
    },
  ];

  for (const testCase of testCases) {
    test(testCase.name, () => {
      expect(
        removeNthFromEnd(testCase.input.list, testCase.input.target),
      ).toEqual(testCase.expected);
    });
  }
});
