/**
给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。



 示例 1：


输入：head = [1,2,2,1]
输出：true


 示例 2：


输入：head = [1,2]
输出：false




 提示：


 链表中节点数目在范围[1, 10⁵] 内
 0 <= Node.val <= 9




 进阶：你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

 Related Topics 栈 递归 链表 双指针 👍 1858 👎 0

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
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    //使用双指针，先将链表前半段翻转
    let slow = fast = head;
    let prev
    while (fast && fast.next){
        fast = fast.next.next;

        let next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }

    // slow 在中间
    if(fast){
        slow = slow.next //奇数个节点
    }
    while (prev && slow){
        if(prev.val !== slow.val){
            return false
        }
        prev = prev.next;
        slow = slow.next
    }
    return true;
};
//leetcode submit region end(Prohibit modification and deletion)
