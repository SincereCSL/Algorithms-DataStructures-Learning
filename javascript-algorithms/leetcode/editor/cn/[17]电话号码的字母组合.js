/**
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。





 示例 1：


输入：digits = "23"
输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]


 示例 2：


输入：digits = ""
输出：[]


 示例 3：


输入：digits = "2"
输出：["a","b","c"]




 提示：


 0 <= digits.length <= 4
 digits[i] 是范围 ['2', '9'] 的一个数字。


 Related Topics 哈希表 字符串 回溯 👍 2791 👎 0

*/

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let len = digits.length;
    const arr = ['','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']
    if(!len){
        return []
    }
    if(len===1){
        console.log(arr[digits].split(''))
        return arr[digits].split('')
    }
    let ret = []
    let path = []
    backtrack(digits,len,0)
    return ret
    function backtrack(digits,l,i){
        if(path.length === l){
            ret.push(path.join(''))
            return
        }
        for(const v of arr[digits[i]]){
            path.push(v)
            backtrack(digits,l,i+1)
            path.pop()
        }
    }
};
//leetcode submit region end(Prohibit modification and deletion)
