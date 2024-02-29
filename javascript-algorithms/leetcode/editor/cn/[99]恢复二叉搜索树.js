/**
给你二叉搜索树的根节点 root ，该树中的 恰好 两个节点的值被错误地交换。请在不改变其结构的情况下，恢复这棵树 。



 示例 1：


输入：root = [1,3,null,null,2]
输出：[3,1,null,null,2]
解释：3 不能是 1 的左孩子，因为 3 > 1 。交换 1 和 3 使二叉搜索树有效。


 示例 2：


输入：root = [3,1,4,null,null,2]
输出：[2,1,4,null,null,3]
解释：2 不能在 3 的右子树中，因为 2 < 3 。交换 2 和 3 使二叉搜索树有效。



 提示：


 树上节点的数目在范围 [2, 1000] 内
 -2³¹ <= Node.val <= 2³¹ - 1




 进阶：使用 O(n) 空间复杂度的解法很容易实现。你能想出一个只使用 O(1) 空间的解决方案吗？

 Related Topics 树 深度优先搜索 二叉搜索树 二叉树 👍 939 👎 0

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let arr = []
    let first
    let second
    function travese(node){
        if(node === null){
            return
        }
        travese(node.left)
        arr.push(node)
        travese(node.right)
    }
    travese(root)
    for(let i=0;i<arr.length-1;i++){
        if(arr[i].val > arr[i+1].val){
            //找到两个值移动位置
            if(!first){
                //第一次遇见
                first = arr[i]
            }
            second = arr[i+1]
        }
    }
    let tmp = first.val
    first.val = second.val
    second.val = tmp
};
//leetcode submit region end(Prohibit modification and deletion)
