/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.nums = nums.sort((a, b) => a > b ? -1 : 1)
    this.k = k - 1
};
/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    for (let n = 0; n < this.nums.length; n++)
        if (this.nums[n] < val) {
            this.nums.splice(n, 0, val)
            return this.nums[this.k]
        }
    this.nums.push(val)
    return this.nums[this.k]
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */