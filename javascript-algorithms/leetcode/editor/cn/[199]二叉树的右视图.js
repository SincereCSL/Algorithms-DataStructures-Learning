/**
给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。



 示例 1:




输入: [1,2,3,null,5,null,4]
输出: [1,3,4]


 示例 2:


输入: [1,null,3]
输出: [1,3]


 示例 3:


输入: []
输出: []




 提示:


 二叉树的节点个数的范围是 [0,100]

 -100 <= Node.val <= 100


 Related Topics 树 深度优先搜索 广度优先搜索 二叉树 👍 1036 👎 0

*/

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    //遍历每一层最右边的一个值
    let ret = [];
    if(root === null){
        return  ret
    }
    let queue = [root]
    while (queue.length){
        let len = queue.length
        while (len--){
            let node = queue.shift()
            if(len === 0){
                ret.push(node.val)
            }
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }
    return ret;
};
//leetcode submit region end(Prohibit modification and deletion)
