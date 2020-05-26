import { addTwoNumbers } from './solution';

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// {
//   input: [a2l([2, 4, 3]), a2l([5, 6, 4])],
//   output: a2l([7, 0, 8]),
// },
// {
//   input: [a2l([1, 2, 3, 4]), a2l([2])],
//   output: a2l([3, 2, 3, 4]),
// },
// {
//   input: [a2l([2]), a2l([1, 2, 3, 4])],
//   output: a2l([3, 2, 3, 4]),
// },
// {
//   input: [a2l([1, 2, 4]), a2l([1, 2, 6])],
//   output: a2l([2, 4, 0, 1]),
// },

describe('addTwoNumbers', () => {
  test('case 1', () => {
    const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));

    const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

    const expected = new ListNode(7, new ListNode(0, new ListNode(8)));

    expect(addTwoNumbers(l1, l2)).toEqual(expected);
  });

  test('case 2', () => {
    const l1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));

    const l2 = new ListNode(2);

    const expected = new ListNode(3, new ListNode(2, new ListNode(3, new ListNode(4))));

    expect(addTwoNumbers(l1, l2)).toEqual(expected);
  });

  test('case 3', () => {
    const l1 = new ListNode(2);

    const l2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));

    const expected = new ListNode(3, new ListNode(2, new ListNode(3, new ListNode(4))));

    expect(addTwoNumbers(l1, l2)).toEqual(expected);
  });

  test('case 4', () => {
    const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));

    const l2 = new ListNode(1, new ListNode(2, new ListNode(6)));

    const expected = new ListNode(2, new ListNode(4, new ListNode(0, new ListNode(1))));

    expect(addTwoNumbers(l1, l2)).toEqual(expected);
  });
});
