
let array = require('./arr')
// console.log(array)

//排序算法:
    // js 内部sort排序
    // array.sort((a,b)=>a-b)
    // console.log(array)

//1.冒泡排序
function bubbleSort(arr){
    // 时间复杂度：O(n^2)
    //每一个元素和它右侧的元素进行比较，如果比它自己右侧元素大 就交换位置 否则就不动
    let len = arr.length-1;
    for(let j=0;j<len;j++){
        for(i=0;i<len-j;i++){ //len-j : 让已经排好序、冒泡的元素就不要在继续冒泡了
            if(arr[i]>arr[i+1]){
                // let tmp = arr[i];
                // arr[i] = arr[i+1];
                // arr[i+1] = tmp;
                [arr[i],arr[i+1]]= [arr[i+1],arr[i]] //结构赋值
            }
        }
    }
    return arr;
}
console.log('冒泡排序:',bubbleSort(array))