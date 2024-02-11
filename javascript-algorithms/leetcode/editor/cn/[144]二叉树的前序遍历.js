/**
给你二叉树的根节点 root ，返回它节点值的 前序 遍历。



 示例 1：


输入：root = [1,null,2,3]
输出：[1,2,3]


 示例 2：


输入：root = []
输出：[]


 示例 3：


输入：root = [1]
输出：[1]


 示例 4：


输入：root = [1,2]
输出：[1,2]


 示例 5：


输入：root = [1,null,2]
输出：[1,2]




 提示：


 树中节点数目在范围 [0, 100] 内
 -100 <= Node.val <= 100




 进阶：递归算法很简单，你可以通过迭代算法完成吗？

 Related Topics 栈 树 深度优先搜索 二叉树 👍 1218 👎 0

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
var preorderTraversal = function(root) {
    let  arr = [];
    function  dfs(root){
        if(root === null){
            return
        }
        arr.push(root.val)
        dfs(root.left)
        dfs(root.right)
    }
    dfs(root)
    return arr;
};
//leetcode submit region end(Prohibit modification and deletion)
