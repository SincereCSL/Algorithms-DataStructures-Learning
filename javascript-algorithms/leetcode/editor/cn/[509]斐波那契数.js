/**
斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：


F(0) = 0，F(1) = 1
F(n) = F(n - 1) + F(n - 2)，其中 n > 1


 给定 n ，请计算 F(n) 。



 示例 1：


输入：n = 2
输出：1
解释：F(2) = F(1) + F(0) = 1 + 0 = 1


 示例 2：


输入：n = 3
输出：2
解释：F(3) = F(2) + F(1) = 1 + 1 = 2


 示例 3：


输入：n = 4
输出：3
解释：F(4) = F(3) + F(2) = 2 + 1 = 3




 提示：


 0 <= n <= 30


 Related Topics 递归 记忆化搜索 数学 动态规划 👍 694 👎 0

*/

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number}
 */
//优化解法：创建备忘录
function helper (memo,n){
    if(n<=1){
        return n;
    }
    if(memo[n]){
        return  memo[n]
    }
    memo[n] =  helper(memo,n-1)+helper(memo,n-2);
    return memo[n]
}
var fib = function(n) {
    // 暴力解法
    // if(n <= 1){
    //     return n;
    // }
    // return fib(n-1)+fib(n-2)

    //解法1:
    //利用(动态规划)
    //dp[i] 就是第i个值的数字
    //dp[i] = dp[i-1]+dp[i-2]
    //
    // let dp = [0,1];
    // for (let i=2;i<=n;i++){
    //     dp[i] = dp[i-1]+dp[i-2]
    // }
    // return  dp[n];


    //优化解法：
    // 利用(动态规划)递推方式 申明一个备忘录 缓存中间的计算结果
    // let memo = [];
    // return helper(memo,n)

    //优化解法1  将解法1中的数组转为数字
    //终止条件
    if(n<=1){
        return n;
    }
    let dp1 = 0
    let dp2 = 1
    let dp3
    for (let i=2;i<=n;i++){
        dp3 = dp1 + dp2;
        //将dp1、dp2进行缓存
        dp1 = dp2
        dp2 = dp3
    }
    return dp3


};
//leetcode submit region end(Prohibit modification and deletion)
