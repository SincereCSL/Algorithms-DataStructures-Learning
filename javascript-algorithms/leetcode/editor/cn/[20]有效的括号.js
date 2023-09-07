/**
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

 有效字符串需满足：


 左括号必须用相同类型的右括号闭合。
 左括号必须以正确的顺序闭合。
 每个右括号都有一个对应的相同类型的左括号。




 示例 1：


输入：s = "()"
输出：true


 示例 2：


输入：s = "()[]{}"
输出：true


 示例 3：


输入：s = "(]"
输出：false




 提示：


 1 <= s.length <= 10⁴
 s 仅由括号 '()[]{}' 组成


 Related Topics 栈 字符串 👍 4145 👎 0

*/

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    //利用数组实现--栈的功能 先入后出 (
    //出现左边括号就塞进到stack中，如果出现右边括号，就利用pop 给左边最后一个给弹出来 对比是否匹配 )
    let stack = []
    let obj = {
        '(':')',
        '{':'}',
        '[':']'
    }
    for(let i= 0;i<s.length;i++){
        const ele = s[i];
        if(ele in obj){
            stack.push(ele)
        }else {
            //反括号的情况
            if(ele !== obj[stack.pop()]){
                return false //不匹配
            }
        }
    }
    //如果没有反括号情况({[
    return !stack.length

};
//leetcode submit region end(Prohibit modification and deletion)
