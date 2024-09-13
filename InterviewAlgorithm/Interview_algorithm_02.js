/****
 给定一个字符串str 和一个字符串列表 wordDict 作为字典。 判断是否可以利用字典中出现的单词拼接出 str。
 举例:
  str = "faraway", wordDict = ["far", "away"]
  输出: true

  str = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
  输出: false

 ****/
function wordBreak(str, wordDict) {
    const stack = [0];
    const visited = new Set();

    while (stack.length > 0) {
        const start = stack.pop();

        if (!visited.has(start)) {
            for (let end = start + 1; end <= str.length; end++) {
                const subStr = str.substring(start, end);
                if (wordDict.includes(subStr)) {
                    if (end === str.length) {
                        return true;
                    }
                    stack.push(end);
                }
            }
            visited.add(start);
        }
    }

    return false;
}

const str1 = "faraway";
const wordDict1 = ["far", "away"];
console.log(wordBreak(str1, wordDict1));
