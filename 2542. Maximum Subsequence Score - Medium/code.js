/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function (nums1, nums2, k) {
    let joined = nums1.map((value, index) => [nums2[index], value]).sort((a, b) => b[0] - a[0])
    let pq = new MinPriorityQueue({ priority: x => x })
    let sum = 0, max = 0
    for (let [weight, value] of joined) {
        if (pq.size() === k)
            sum -= pq.dequeue().element
        sum += value
        pq.enqueue(value)
        if (pq.size() === k)
            max = Math.max(max, sum * weight)
    }
    return max
};