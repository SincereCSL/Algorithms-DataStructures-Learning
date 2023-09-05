/**
给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。



 示例 1：


输入：head = [1,2,6,3,4,5,6], val = 6
输出：[1,2,3,4,5]


 示例 2：


输入：head = [], val = 1
输出：[]


 示例 3：


输入：head = [7,7,7,7], val = 7
输出：[]




 提示：


 列表中的节点数目在范围 [0, 10⁴] 内
 1 <= Node.val <= 50
 0 <= val <= 50


 Related Topics 递归 链表 👍 1325 👎 0

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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    //方法一：递归实现
    // if(head === null){
    //     return head;
    // }
    // head.next = removeElements(head.next,val)
    // return head.val === val ? head.next : head

    //方法二：使用遍历方式、设置"哨兵"元素 哨兵 => 1 =>2 =>3 =>4
    let ele = {
        next:head
    }
    let  p = ele;
    while(p.next){
        if(p.next.val === val){
            p.next = p.next.next;
        }else{
            p = p.next
        }
    }
    return ele.next

};
//leetcode submit region end(Prohibit modification and deletion)
