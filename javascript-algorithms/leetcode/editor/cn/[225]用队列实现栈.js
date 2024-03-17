/**
请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（push、top、pop 和 empty）。

 实现 MyStack 类：


 void push(int x) 将元素 x 压入栈顶。
 int pop() 移除并返回栈顶元素。
 int top() 返回栈顶元素。
 boolean empty() 如果栈是空的，返回 true ；否则，返回 false 。




 注意：


 你只能使用队列的标准操作 —— 也就是 push to back、peek/pop from front、size 和 is empty 这些操作。
 你所使用的语言也许不支持队列。 你可以使用 list （列表）或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。




 示例：


输入：
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
输出：
[null, null, null, 2, 2, false]

解释：
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // 返回 2
myStack.pop(); // 返回 2
myStack.empty(); // 返回 False




 提示：


 1 <= x <= 9
 最多调用100 次 push、pop、top 和 empty
 每次调用 pop 和 top 都保证栈不为空




 进阶：你能否仅用一个队列来实现栈。

 Related Topics 栈 设计 队列 👍 868 👎 0

*/

//leetcode submit region begin(Prohibit modification and deletion)

var MyStack = function() {

    this.queue1 = [];
    this.queue2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue1.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    // 1、队列1中有数据，队列1清空，备份到队列2
    // 2、队列1没有数据，队列1与队列2交换后 弹出数据
    if(!this.queue1.length){
        [this.queue1,this.queue2] = [this.queue2,this.queue1]
    }
    while (this.queue1.length>1){
        this.queue2.push(this.queue1.shift())
    }
    return this.queue1.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    const x = this.pop()
    this.queue1.push(x)
    return x
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return !this.queue1.length && !this.queue2.length
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
//leetcode submit region end(Prohibit modification and deletion)
