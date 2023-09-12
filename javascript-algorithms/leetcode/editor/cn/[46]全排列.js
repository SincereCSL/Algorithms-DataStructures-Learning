/**
给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。



 示例 1：


输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]


 示例 2：


输入：nums = [0,1]
输出：[[0,1],[1,0]]


 示例 3：


输入：nums = [1]
输出：[[1]]




 提示：


 1 <= nums.length <= 6
 -10 <= nums[i] <= 10
 nums 中的所有整数 互不相同


 Related Topics 数组 回溯 👍 2687 👎 0

*/

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */


// 递归公式
// 遍历到3的时候
// [1,2]
// [2,1]
function backTrack(list,temp,nums){
    // 放进去一个元素
    // 执行递归公式
    // 撤回这个不元素

    // 1、终止条件
    if(temp.length === nums.length){//已经排列完成
        return list.push([...temp])
    }
    //没有终止
    for (let i=0;i<nums.length;i++){
        //找到一个不在temp里的数字
        if(temp.includes(nums[i])){
            continue
        }
        // tmp = [1]
        //   backTrack
        //     tmp = [1,2]
        //      backTrack
        //        tmp = [1,2,3] 终止
        temp.push(nums[i])
        backTrack(list,temp,nums)
        //撤回
        temp.pop();

    }
    // 2、递归公式
    // 3、最后
}
var permute = function(nums) {
    let list = [];
    backTrack(list,[],nums)

    return list
};
//leetcode submit region end(Prohibit modification and deletion)
