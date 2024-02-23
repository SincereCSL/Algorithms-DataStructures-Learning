/**
给你一个二叉树的根节点 root ， 检查它是否轴对称。



 示例 1：


输入：root = [1,2,2,3,4,4,3]
输出：true


 示例 2：


输入：root = [1,2,2,null,3,null,3]
输出：false




 提示：


 树中节点数目在范围 [1, 1000] 内
 -100 <= Node.val <= 100




 进阶：你可以运用递归和迭代两种方法解决这个问题吗？

 Related Topics 树 深度优先搜索 广度优先搜索 二叉树 👍 2651 👎 0

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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    const travese = (root1, root2)=>{
        if(root1 === null && root2 === null){
            return true
        }
        if(root1 ===null || root2 === null){
            return false
        }
        if(root1.val === root2.val){
            return travese(root1.left,root2.right) && travese(root1.right,root2.left)
        }
        return false;
    }
    return travese(root.left,root.right)
};
//leetcode submit region end(Prohibit modification and deletion)
