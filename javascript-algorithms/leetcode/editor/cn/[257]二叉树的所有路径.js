/**
给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。

 叶子节点 是指没有子节点的节点。

 示例 1：


输入：root = [1,2,3,null,5]
输出：["1->2->5","1->3"]


 示例 2：


输入：root = [1]
输出：["1"]




 提示：


 树中节点的数目在范围 [1, 100] 内
 -100 <= Node.val <= 100


 Related Topics 树 深度优先搜索 字符串 回溯 二叉树 👍 1098 👎 0

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
 * @return {string[]}
 */
// var binaryTreePaths = function(root) {
//     let ret = [];
//     const travese = (treeNode,path)=>{
//         if(treeNode === null){
//             return null
//         }
//         if(treeNode.left === null && treeNode.right === null){
//             ret.push(path+treeNode.val)
//         }
//         travese(treeNode.left,path+treeNode.val+"->")
//         travese(treeNode.right,path+treeNode.val+"->")
//     }
//     travese(root,"")
//     return ret
// };

var binaryTreePaths = function(root) {
    let ret = [];
    const travese = (treeNode,path = [])=>{
        if(treeNode === null){
            return null
        }
        if(treeNode.left === null && treeNode.right === null){
            path.push(treeNode.val)
            ret.push(path.join('->'))
        }
        travese(treeNode.left,path.concat(treeNode.val))
        travese(treeNode.right,path.concat(treeNode.val))
    }
    travese(root,[])
    return ret
};

//leetcode submit region end(Prohibit modification and deletion)
