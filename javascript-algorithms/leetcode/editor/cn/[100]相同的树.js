/**
给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。

 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。



 示例 1：


输入：p = [1,2,3], q = [1,2,3]
输出：true


 示例 2：


输入：p = [1,2], q = [1,null,2]
输出：false


 示例 3：


输入：p = [1,2,1], q = [1,1,2]
输出：false




 提示：


 两棵树上的节点数目都在范围 [0, 100] 内
 -10⁴ <= Node.val <= 10⁴


 Related Topics 树 深度优先搜索 广度优先搜索 二叉树 👍 1070 👎 0

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// var isSameTree = function(p, q) {
//     //递归解法
//     if(p === null && q === null){
//         return  true
//     }
//     //如果有一个为null
//     if(p === null || q === null ){
//         return  false
//     }
//     //判断子节点是否相等
//     if(p.val !== q.val){
//         return false
//     }
//     return isSameTree(p.left,q.left) && isSameTree(p.right,q.right)
//
//
//
// };

// 解法：2
// var isSameTree = function(p, q) {
//     //
//     function travese (p,q){
//         if(p === null && q === null){
//             return true
//         }
//         if(p === null || q === null){
//             return false
//         }
//         let left = travese(p.left,q.left)
//         let right = travese(p.right,q.right)
//         if(p.val === q.val && left && right){
//             return true
//         }
//         return false
//     }
//     return travese(p,q)
// };

// 解法：3 迭代方式
var isSameTree = function(p, q) {
    if(p === null && q ===null){
        return true
    }
    if(p === null || q === null){
        return false
    }
    //申明队列
    let queueP = [p];
    let queueQ = [q];
    while(queueP.length && queueQ.length){
        const treeNodeP = queueP.pop();
        const treeNodeQ = queueQ.pop();
        if(treeNodeP.val !== treeNodeQ.val){
            return false
        }

        if(treeNodeP.left && treeNodeQ.left){
            queueP.push(treeNodeP.left);
            queueQ.push(treeNodeQ.left)
        }else if(treeNodeP.left || treeNodeQ.left){
            return false
        }

        if(treeNodeP.right && treeNodeQ.right){
            queueP.push(treeNodeP.right);
            queueQ.push(treeNodeQ.right);
        }else if(treeNodeP.right || treeNodeQ.right){
            return false
        }
    }
    return  queueP.length === 0 && queueQ.length === 0;
};
//leetcode submit region end(Prohibit modification and deletion)
