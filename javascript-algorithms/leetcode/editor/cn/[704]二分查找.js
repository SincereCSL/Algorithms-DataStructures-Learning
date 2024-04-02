/**
给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返
回 -1。

 示例 1:

 输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4


 示例 2:

 输入: nums = [-1,0,3,5,9,12], target = 2
输出: -1
解释: 2 不存在 nums 中因此返回 -1




 提示：


 你可以假设 nums 中的所有元素是不重复的。
 n 将在 [1, 10000]之间。
 nums 的每个元素都将在 [-9999, 9999]之间。


 Related Topics 数组 二分查找 👍 1556 👎 0

*/

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // ---- 暴力解法：----
    // for(let i=0;i<nums.length; i++){
    //     if(nums[i] === target){
    //         return i
    //     }
    // }
    // return -1

    // ---- 二分查找解法：----

    let left = 0
    let right = nums.length-1
    while (left<=right){
        let mid = (left+right)>>1 // 右移一位
        // let mid = left + ((right-left))>>1
        if(nums[mid] < target){
            // 在mid的右边查找
            left = mid+1
        }else if(nums[mid] > target){
            // 在mid的左边查找
            right = mid-1
        }else if(nums[mid] === target){
            return mid
        }
    }
    return -1
};
//leetcode submit region end(Prohibit modification and deletion)
