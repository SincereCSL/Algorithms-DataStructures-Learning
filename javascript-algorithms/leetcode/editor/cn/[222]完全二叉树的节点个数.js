/**
给你一棵 完全二叉树 的根节点 root ，求出该树的节点个数。

 完全二叉树 的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第
 h 层，则该层包含 1~ 2ʰ 个节点。



 示例 1：


输入：root = [1,2,3,4,5,6]
输出：6


 示例 2：


输入：root = []
输出：0


 示例 3：


输入：root = [1]
输出：1




 提示：


 树中节点的数目范围是[0, 5 * 10⁴]
 0 <= Node.val <= 5 * 10⁴
 题目数据保证输入的树是 完全二叉树




 进阶：遍历树来统计节点是一种时间复杂度为 O(n) 的简单解决方案。你可以设计一个更快的算法吗？

 Related Topics 位运算 树 二分查找 二叉树 👍 1095 👎 0

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
var countNodes = function(root) {
    function travses(treeNode){
        if(treeNode === null){
            return 0
        }
        let leftNum = travses(treeNode.left)
        let right = travses(treeNode.right)
        return leftNum + right +1;
    }
    return travses(root)
};
//leetcode submit region end(Prohibit modification and deletion)
