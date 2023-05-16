/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    let root = new ListNode(undefined, head)
    let currentParent = root
    while (currentParent.next !== null && currentParent.next.next !== null) {
        let old = currentParent.next
        let young = currentParent.next.next
        currentParent.next = young
        old.next = young.next
        young.next = old
        currentParent = old
    }
    return root.next
};