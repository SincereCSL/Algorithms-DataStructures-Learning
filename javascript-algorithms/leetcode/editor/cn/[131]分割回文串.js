/**
给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。



 示例 1：


输入：s = "aab"
输出：[["a","a","b"],["aa","b"]]


 示例 2：


输入：s = "a"
输出：[["a"]]




 提示：


 1 <= s.length <= 16
 s 仅由小写英文字母组成


 Related Topics 字符串 动态规划 回溯 👍 1781 👎 0

*/

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string[][]}
 */
function isPalindrome(s,l,r){
    for(let i =l,j=r;i<j;i++,j--){
        if(s[i] !== s[j]){
            return false
        }
    }
    return true
}
var partition = function(s) {
    let ret = []
    let path = []
    backtrack(0)
    return ret
    function backtrack(i){
        if(i>=s.length){
            ret.push([...path])
            return
        }
        for(let j=i;j<s.length;j++){
            // 回文
            if(!isPalindrome(s,i,j)){
                continue
            }
            path.push(s.substr(i,j-i+1))
            backtrack(j+1)
            path.pop()
        }
    }
};
//leetcode submit region end(Prohibit modification and deletion)
