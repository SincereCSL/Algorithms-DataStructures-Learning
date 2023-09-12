/**
在柠檬水摊上，每一杯柠檬水的售价为 5 美元。顾客排队购买你的产品，（按账单 bills 支付的顺序）一次购买一杯。

 每位顾客只买一杯柠檬水，然后向你付 5 美元、10 美元或 20 美元。你必须给每个顾客正确找零，也就是说净交易是每位顾客向你支付 5 美元。

 注意，一开始你手头没有任何零钱。

 给你一个整数数组 bills ，其中 bills[i] 是第 i 位顾客付的账。如果你能给每位顾客正确找零，返回 true ，否则返回 false 。



 示例 1：


输入：bills = [5,5,5,10,20]
输出：true
解释：
前 3 位顾客那里，我们按顺序收取 3 张 5 美元的钞票。
第 4 位顾客那里，我们收取一张 10 美元的钞票，并返还 5 美元。
第 5 位顾客那里，我们找还一张 10 美元的钞票和一张 5 美元的钞票。
由于所有客户都得到了正确的找零，所以我们输出 true。


 示例 2：


输入：bills = [5,5,10,10,20]
输出：false
解释：
前 2 位顾客那里，我们按顺序收取 2 张 5 美元的钞票。
对于接下来的 2 位顾客，我们收取一张 10 美元的钞票，然后返还 5 美元。
对于最后一位顾客，我们无法退回 15 美元，因为我们现在只有两张 10 美元的钞票。
由于不是每位顾客都得到了正确的找零，所以答案是 false。




 提示：


 1 <= bills.length <= 10⁵
 bills[i] 不是 5 就是 10 或是 20


 Related Topics 贪心 数组 👍 537 👎 0

*/

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} bills
 * @return {boolean}
 */

// 1、如果顾客 给5块 直接揣兜里
// 2、如果顾客 给10块 兜里有5块 就找给顾客

// 3、如果顾客 给20块   可以给顾客一个10+5 或者 3个5块 5+5+5
// 优先给10块，
var lemonadeChange = function(bills) {
    let fiveCount = 0;
    let tenCount = 0;
    for (let i=0;i<bills.length;i++){
        let bill = bills[i];
        if(bill===5){
            //不用找钱
            fiveCount += 1;
        }else if(bill===10){
            if(fiveCount>0){
                fiveCount -= 1;
                tenCount += 1;
            }else {
                return false;
            }
        }else{
            //20的情况
            if(fiveCount>0 && tenCount>0){
                fiveCount -= 1;
                tenCount -= 1;
            }else if(fiveCount>2){
                fiveCount -= 3;
            }else {
                return false;
            }
        }
    }
    return true; //找完钱了

};
//leetcode submit region end(Prohibit modification and deletion)
