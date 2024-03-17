/**
给定二叉搜索树（BST）的根节点
 root 和一个整数值
 val。

 你需要在 BST 中找到节点值等于 val 的节点。 返回以该节点为根的子树。 如果节点不存在，则返回
 null 。



 示例 1:





输入：root = [4,2,7,1,3], val = 2
输出：[2,1,3]


 示例 2:


输入：root = [4,2,7,1,3], val = 5
输出：[]




 提示：


 树中节点数在 [1, 5000] 范围内
 1 <= Node.val <= 10⁷
 root 是二叉搜索树
 1 <= val <= 10⁷


 Related Topics 树 二叉搜索树 二叉树 👍 462 👎 0

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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if(root === null){
        return root
    }
    if(root.val === val){
        return root
    }else if(root.val > val){
        return searchBST(root.left,val)
    }else if(root.val < val){
        return searchBST(root.right,val)
    }
};
//leetcode submit region end(Prohibit modification and deletion)
