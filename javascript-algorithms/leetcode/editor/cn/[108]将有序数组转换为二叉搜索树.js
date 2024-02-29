/**
给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。

 高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。



 示例 1：


输入：nums = [-10,-3,0,5,9]
输出：[0,-3,9,-10,null,5]
解释：[0,-10,5,null,-3,null,9] 也将被视为正确答案：



 示例 2：


输入：nums = [1,3]
输出：[3,1]
解释：[1,null,3] 和 [3,1] 都是高度平衡二叉搜索树。




 提示：


 1 <= nums.length <= 10⁴
 -10⁴ <= nums[i] <= 10⁴
 nums 按 严格递增 顺序排列


 Related Topics 树 二叉搜索树 数组 分治 二叉树 👍 1478 👎 0

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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(!nums.length){
        return null
    }
    // 二叉搜索树的中中序遍历，生序列表
    // 数组中间的位置，可以作为树的根节点
    const mid = Math.floor(nums.length/2)
    const root = new TreeNode(nums[mid])
    root.left = sortedArrayToBST(nums.slice(0,mid))
    root.right = sortedArrayToBST(nums.slice(mid+1))
    return root
};
//leetcode submit region end(Prohibit modification and deletion)
