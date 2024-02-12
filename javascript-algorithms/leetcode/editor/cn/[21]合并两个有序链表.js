/**
将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。



 示例 1：


输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]


 示例 2：


输入：l1 = [], l2 = []
输出：[]


 示例 3：


输入：l1 = [], l2 = [0]
输出：[0]




 提示：


 两个链表的节点数目范围是 [0, 50]
 -100 <= Node.val <= 100
 l1 和 l2 均按 非递减顺序 排列


 Related Topics 递归 链表 👍 3435 👎 0

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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // 遍历两个链表，每次判断头部节点的大小
    // 优先把小的追加到新的链表
    let dummy = {
        next:null
    }
    let tmp = dummy
    while (list1 !== null && list2 !== null){
        if(list1.val <= list2.val){
            tmp.next = list1
            list1 = list1.next;
        }else{
            tmp.next = list2
            list2 = list2.next
        }
        tmp = tmp.next
    }
    tmp.next = list1 === null ? list2 : list1
    return dummy.next
};
//leetcode submit region end(Prohibit modification and deletion)
