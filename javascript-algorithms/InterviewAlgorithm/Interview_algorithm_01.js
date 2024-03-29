//设计一个大数加法：有两个特别大的数(用字符串表示)，设计一个add()方法；
function addLargeNumber (num1, num2) {
    // 主要思路：如果是通过将数字转为字符串，然后字符串按位相加
    let result = ""; //保存最后返回结果
    let carry = false; //保留进位结果
    let tmpNum1 = num1.split("")
    let tmpNum2  = num2.split("")
    // 当数组的长度都变为0，并且最终不再进位时，结束循环
    //按位非运算符“~”  双非“～～”
    while (tmpNum1.length || tmpNum2.length ||carry){
        //每次将最后的数字进行相加，使用～～的好处 即使返回值为 undefined 也能转换为0
        carry += ~~tmpNum1.pop() + ~~tmpNum2.pop();

        //取加法的个位加入最终结果
        result = carry % 10 + result;

        //判断是否需要进位， true 和 false 的值在加法中会被转换为1和0
        carry = carry > 9;
    }
    return result;
}
console.log(addLargeNumber('23480623453457923523', '723456923458023456238045')); // '723480404081476914161568'

