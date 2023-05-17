/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
    let left = head
    let right = head
    let revHalfHead = null
    while (right) {
        right = right.next.next
        let tmp = left.next
        left.next = revHalfHead
        revHalfHead = left
        left = tmp
    }
    let max = 0
    while (left) {
        max = Math.max(max, revHalfHead.val + left.val)
        revHalfHead = revHalfHead.next
        left = left.next
    }
    return max
};