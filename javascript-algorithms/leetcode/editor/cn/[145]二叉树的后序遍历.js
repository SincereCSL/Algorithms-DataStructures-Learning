/**
给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。



 示例 1：


输入：root = [1,null,2,3]
输出：[3,2,1]


 示例 2：


输入：root = []
输出：[]


 示例 3：


输入：root = [1]
输出：[1]




 提示：


 树中节点的数目在范围 [0, 100] 内
 -100 <= Node.val <= 100




 进阶：递归算法很简单，你可以通过迭代算法完成吗？

 Related Topics 栈 树 深度优先搜索 二叉树 👍 1144 👎 0

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
var postorderTraversal = function(root) {
    let arr = [];
    function  dfs(root){
        if(root === null){
            return
        }
        dfs(root.left)
        dfs(root.right)
        arr.push(root.val)
    }
    dfs(root)
    return  arr;

};
//leetcode submit region end(Prohibit modification and deletion)
