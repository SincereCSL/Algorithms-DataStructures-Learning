/**
给定一个二叉树 root ，返回其最大深度。

 二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。



 示例 1：






输入：root = [3,9,20,null,null,15,7]
输出：3


 示例 2：


输入：root = [1,null,2]
输出：2




 提示：


 树中节点的数量在 [0, 10⁴] 区间内。
 -100 <= Node.val <= 100


 Related Topics 树 深度优先搜索 广度优先搜索 二叉树 👍 1686 👎 0

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
 * @return {number}
 */
var maxDepth = function(root) {
    //终止条件 节点不存在的时候 深度为0
    if(root === null){
        return 0
    }
    // 树的最大深度，等于左子树的深度 和右子树的深度，最大的那一个 +1
    return Math.max(maxDepth(root.left),maxDepth(root.right))+1
};
//leetcode submit region end(Prohibit modification and deletion)
