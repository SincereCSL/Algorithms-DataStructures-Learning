/**
给定一个二叉树，找出其最小深度。

 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

 说明：叶子节点是指没有子节点的节点。



 示例 1：


输入：root = [3,9,20,null,null,15,7]
输出：2


 示例 2：


输入：root = [2,null,3,null,4,null,5,null,6]
输出：5




 提示：


 树中节点数的范围在 [0, 10⁵] 内
 -1000 <= Node.val <= 1000


 Related Topics 树 深度优先搜索 广度优先搜索 二叉树 👍 1156 👎 0

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
// 解法1: 递归
// var minDepth = function(root) {
//     if(root === null){
//         return 0
//     }
//     if(root.left === null && root.right === null){
//         return 1
//     }
//     if(root.left === null){
//         return minDepth(root.right)+1
//     }
//     if(root.right === null){
//         return minDepth(root.left)+1
//     }
//     return Math.min(minDepth(root.left),minDepth(root.right))+1
// };

// 解法2：迭代
var minDepth = function(root) {
    if(root === null){
        return 0
    }
    //记录层级的变量
    let dep = 0;
    const stack = [root];

    while (true){
        let size = stack.length;
        dep++
        while (size--){
            let node = stack.shift();
            if(!node.left && !node.right){
                return dep
            }
            node.left && stack.push(node.left)
            node.right && stack.push(node.right)
        }
    }

};
//leetcode submit region end(Prohibit modification and deletion)
