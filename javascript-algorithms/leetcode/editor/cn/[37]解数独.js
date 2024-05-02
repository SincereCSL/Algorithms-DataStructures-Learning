/**
编写一个程序，通过填充空格来解决数独问题。

 数独的解法需 遵循如下规则：


 数字 1-9 在每一行只能出现一次。
 数字 1-9 在每一列只能出现一次。
 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）


 数独部分空格内已填入了数字，空白格用 '.' 表示。






 示例 1：


输入：board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",
".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".",
"3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],
[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".
",".",".",".","8",".",".","7","9"]]
输出：[["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],
["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4
","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6
","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5
","2","8","6","1","7","9"]]
解释：输入的数独如上图所示，唯一有效的解决方案如下所示：









 提示：


 board.length == 9
 board[i].length == 9
 board[i][j] 是一位数字或者 '.'
 题目数据 保证 输入数独仅有一个解


 Related Topics 数组 哈希表 回溯 矩阵 👍 1821 👎 0

*/

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    // solveSudoku 递归什么时候终止
    for(let i=0;i<9; i++){
        for(let j=0;j<9; j++){
            if(board[i][j] !== '.'){
                continue
            }
            // 开始放置数字
            // 1～9
            for(let k=1;k<=9;k++){
                // 判断数独是不是合理
                k = k.toString()
                if(isValid(board,i,j,k)){
                    board[i][j] = k
                    // 放下一个数字的解
                    if(solveSudoku(board)){
                        return true
                    }
                    board[i][j] = '.'
                }
            }
            // 不能放置数字时
            return false
        }
    }
    // 找到解
    return true
};
function isValid(board,row,col,k){
    // 判断第i行、第i列有没有和自己相同的
    for (let i=0;i<9;i++){
        if(board[row][i] ===k || board[i][col] === k){
            return false
        }
    }
    // 判断小的3*3的是不是有和自己相同的
    // 判断当前3*3 方格就可以
    const x = Math.floor(row/3) *3
    const y = Math.floor(col/3) *3
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(board[x+i][y+j] === k){
                return false
            }
        }
    }
    return true
}
//leetcode submit region end(Prohibit modification and deletion)
