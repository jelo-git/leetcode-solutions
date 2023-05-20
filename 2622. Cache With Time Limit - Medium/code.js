var TimeLimitedCache = function () {
    this.storage = new Map()
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    let before = this.storage.has(key)
    if (before)
        clearTimeout(this.storage.get(key)[1])
    this.storage.set(key, [value, setTimeout(() => { this.storage.delete(key) }, duration)])
    return before
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    return this.storage.has(key) ? this.storage.get(key)[0] : -1
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    return this.storage.size
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */