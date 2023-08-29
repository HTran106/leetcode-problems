/*
 * @lc app=leetcode id=1656 lang=javascript
 *
 * [1656] Design an Ordered Stream
 */

// @lc code=start
/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = '';
    }
    this.arr = arr;
    this.ptr = 0;

};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    this.arr[idKey - 1] = value;
    const res = [];
    while (this.arr[this.ptr] !== '') {
        res.push(this.arr[this.ptr]);
        this.ptr++;
    }
    return res;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
// @lc code=end
