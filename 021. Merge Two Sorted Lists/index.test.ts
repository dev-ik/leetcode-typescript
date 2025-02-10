import { ListNode, mergeTwoLists } from './index';

describe('mergeTwoLists', () => {
  const testCases = [
    {
      name: 'Case 1',
      input: {
        list1: new ListNode(1, new ListNode(2, new ListNode(4, null))),
        list2: new ListNode(1, new ListNode(3, new ListNode(4, null))),
      },
      expected: new ListNode(
        1,
        new ListNode(
          1,
          new ListNode(
            2,
            new ListNode(3, new ListNode(4, new ListNode(4, null))),
          ),
        ),
      ),
    },
    {
      name: 'Case 2',
      input: {
        list1: null,
        list2: null,
      },
      expected: null,
    },
    {
      name: 'Case 3',
      input: {
        list1: null,
        list2: new ListNode(0, null),
      },
      expected: new ListNode(0, null),
    },
  ];

  for (const testCase of testCases) {
    test(testCase.name, () => {
      expect(mergeTwoLists(testCase.input.list1, testCase.input.list2)).toEqual(
        testCase.expected,
      );
    });
  }
});
