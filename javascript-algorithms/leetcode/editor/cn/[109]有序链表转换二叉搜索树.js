/**
给定一个单链表的头节点 head ，其中的元素 按升序排序 ，将其转换为高度平衡的二叉搜索树。

 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差不超过 1。



 示例 1:




输入: head = [-10,-3,0,5,9]
输出: [0,-3,9,-10,null,5]
解释: 一个可能的答案是[0，-3,9，-10,null,5]，它表示所示的高度平衡的二叉搜索树。


 示例 2:


输入: head = []
输出: []




 提示:


 head 中的节点数在[0, 2 * 10⁴] 范围内
 -10⁵ <= Node.val <= 10⁵


 Related Topics 树 二叉搜索树 链表 分治 二叉树 👍 889 👎 0

*/

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    // 快慢指针
    function travese(head,tail){
        if(head === tail){
            return null
        }
        let slow = fast = head;
        while (fast !== tail && fast.next !== tail){
            slow = slow.next
            fast = fast.next.next
        }
        let root = new TreeNode(slow.val)
        root.left = travese(head,slow)
        root.right = travese(slow.next,tail)
        return root;
    }
    return travese(head,null)

};
//leetcode submit region end(Prohibit modification and deletion)
