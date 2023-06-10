/*
 * @lc app=leetcode id=933 lang=javascript
 *
 * [933] Number of Recent Calls
 */

// @lc code=start

var RecentCounter = function() {

};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    function TreeNode(val) {
        this.val = val;
        this.left = this.right = null;
    }

    function BST() {
        this.root = null;
    }

    BST.prototype.insert = function(val) {
        const newNode = new TreeNode(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (val === current.val) return undefined;
            if (val < current.val) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    BST.prototype.contains = function(val) {
        if (!this.root) return false;
        let current = this.root;
        while (current) {
            if (val === current.val) return true;
            if (val < current.val) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    BST.prototype.bfs = function() {
        const data = [];
        const queue = [];
        let node = this.root;
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }

    BST.prototype.dfsPreOrder = function() {
        const data = [];
        function traverse(node) {
            data.push(node.val);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    BST.prototype.dfsPostOrder = function() {
        const data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.val);
        }
        traverse(this.root);
        return data;
    }

    BST.prototype.dfsInOrder = function() {
        const data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.val);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    const bst = new BST();
    bst.insert(t);

    let count = 0;
    const arr = bst.dfsInOrder();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= t - 3000 && arr[i] <= t) count++;
    }

    return count;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end
