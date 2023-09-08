/**
给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，
同时还满足 nums[i] + nums[j] + nums[k] == 0 。请

 你返回所有和为 0 且不重复的三元组。

 注意：答案中不可以包含重复的三元组。





 示例 1：


输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
解释：
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
注意，输出的顺序和三元组的顺序并不重要。


 示例 2：


输入：nums = [0,1,1]
输出：[]
解释：唯一可能的三元组和不为 0 。


 示例 3：


输入：nums = [0,0,0]
输出：[[0,0,0]]
解释：唯一可能的三元组和为 0 。




 提示：


 3 <= nums.length <= 3000
 -10⁵ <= nums[i] <= 10⁵


 Related Topics 数组 双指针 排序 👍 5526 👎 0

*/

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(nums.length<3){
        return [];
    }
    let list = [];
    //最小 + 最大之和，如果比目标值大，说明要缩小这个值，最大值向左移动，否则最小值向右移动
    //先对nums进行排序
    nums.sort((a,b)=>a-b) //n*lgn
    for(let i=0;i<nums.length;i++){
        if(nums[i] === nums[i-1]){
            continue
        }
        //num[i] 为基准，找到另外两个数组，数组之和 -num[i]
        let left = i+1;
        let right = nums.length-1;
        while (left<right){
            if(right === i){
                right--
            }else if(nums[left]+nums[right]+nums[i] === 0){
                //直接找到了
                list.push([nums[left],nums[right],nums[i]])
                while (nums[left] === nums[left+1]){
                    // 相同的数组
                    left++
                }
                left++
                while (nums[right] === nums[right-1]){
                    right--
                }
                right--
            }else if(nums[left]+nums[right]+nums[i]>0){
                //数字大了
                right--
            }else {
                //数字小了
                left++
            }
        }
    }
    return list;

};
//leetcode submit region end(Prohibit modification and deletion)
