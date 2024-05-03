/**
给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

 你可以按 任何顺序 返回答案。



 示例 1：


输入：n = 4, k = 2
输出：
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]

 示例 2：


输入：n = 1, k = 1
输出：[[1]]



 提示：


 1 <= n <= 20
 1 <= k <= n


 Related Topics 回溯 👍 1622 👎 0

*/

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let ret = [];
    let path = []; // 递归的时候临时使用
    backtrack(n,k,1)
    return ret
    function backtrack(n,k,i){
        let len = path.length
        if(len === k){
            ret.push([...path])
            return
        }
        for (let j=i;j<=n-k+len+1;j++){
            path.push(j)
            backtrack(n,k,j+1)
            path.pop()
        }
    }
};
//leetcode submit region end(Prohibit modification and deletion)
