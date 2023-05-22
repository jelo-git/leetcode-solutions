/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let head = new ListNode(undefined, undefined)
    let next = head
    while (list1 && list2) {
        if (list1.val > list2.val) {
            next.next = new ListNode(list2.val, list2.next)
            list2 = list2.next
        } else {
            next.next = new ListNode(list1.val, list1.next)
            list1 = list1.next
        }
        next = next.next
    }
    while (list1 !== null) {
        next.next = new ListNode(list1.val, list1.next)
        list1 = list1.next
        next = next.next
    }
    while (list2 !== null) {
        next.next = new ListNode(list2.val, list2.next)
        list2 = list2.next
        next = next.next
    }
    return head.next
};