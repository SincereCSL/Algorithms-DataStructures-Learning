/**
给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。



 示例 1：


输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word =
"ABCCED"
输出：true


 示例 2：


输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word =
"SEE"
输出：true


 示例 3：


输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word =
"ABCB"
输出：false




 提示：


 m == board.length
 n = board[i].length
 1 <= m, n <= 6
 1 <= word.length <= 15
 board 和 word 仅由大小写英文字母组成




 进阶：你可以使用搜索剪枝的技术来优化解决方案，使其在 board 更大的情况下可以更快解决问题？

 Related Topics 数组 回溯 矩阵 👍 1677 👎 0

*/
// 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
//      word = "ABCCED"
// 输出：true

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    //输入的终止条件
    if(board.length === 0){
        return false
    }
    if(word.length === 0){//找到了
        return true
    }
    //开始循环查找
    //定义二维数组行、列
    let row = board.length; //行的值
    let col = board[0].length; // 列的值
    for(let i=0;i<col;i++){
        for (let n=0;n<col;n++){
            //每一个字母都可以作为起点搜索
            const ret = find(i,n,0) //0 当前查询字母的索引
            if(ret){
                return  ret;
            }
        }
    }
    return false; //结束还没有找到返回false
    //递归函数
    function find(i,n,cur){
        if(i>=row || i<0){//左边、右边越界
            return false
        }
        if(n>=col || n<0){
            return false
        }

        let letter = board[i][n]

        //判断查询结果
        if(letter !== word[cur]){
            return false
        }
        if(cur === word.length-1){
            //找到最后一个 也是匹配到
            return true
        }

        board[i][n] = null //选择当前的字母
        //进行下一步 有一个找到就OK
        const ret   = find(i+1,n,cur+1) ||
                            find(i-1,n,cur+1) ||
                            find(i,n+1,cur+1) ||
                            find(i,n-1,cur+1)
        board[i][n] = letter //撤回
        return  ret;
    }

};
//leetcode submit region end(Prohibit modification and deletion)
