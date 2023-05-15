/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
    if (head.next === null)
        return head
    let parentOfList = new ListNode(undefined, head)
    let firstNode = parentOfList.next
    while (--k) {
        firstNode = firstNode.next
    }
    let n = firstNode, secNode = parentOfList
    while (n) {
        n = n.next
        secNode = secNode.next
    }
    parentOfList.val = secNode.val
    secNode.val = firstNode.val
    firstNode.val = parentOfList.val
    return parentOfList.next
};