/**
给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。



 示例 1：




输入：root = [4,2,7,1,3,6,9]
输出：[4,7,2,9,6,3,1]


 示例 2：




输入：root = [2,1,3]
输出：[2,3,1]


 示例 3：


输入：root = []
输出：[]




 提示：


 树中节点数目范围在 [0, 100] 内
 -100 <= Node.val <= 100


 Related Topics 树 深度优先搜索 广度优先搜索 二叉树 👍 1670 👎 0

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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    // 终止条件
    if(root === null){
        return root
    }

    // 递归子问题
    [root.left,root.right] = [invertTree(root.right),invertTree(root.left)] //解构赋值
    return root
};
//leetcode submit region end(Prohibit modification and deletion)
