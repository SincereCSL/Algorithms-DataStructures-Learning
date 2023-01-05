
class linkNode {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class linkNodeList {
    constructor(){
        this.head = null;
        this.length = 0;
    }
    append(val){
        let node = new linkNode(val);
        let p = this.head; //缓存下head节点
        if(this.head){
            //找到链表最后一个节点，把这个节点的.next属性赋值给node
            while(p.next){ //链表通过while进行循环
                p = p.next;
            }
            p.next = node;
        }else{
           // 如果没有head节点，链表是空的 把要创建的节点 赋值给head
           this.head = node;
        }
        this.length++ ;
    }
    print(){
        let p = this.head;
        let result = '';
        if(this.head){
            do{
                result += (p.val +'=>');
                p = p.next;
            }while(p.next)
            result += p.val;
            console.log(result)
        }else{
            console.log('empty')
        }
    }
}

// 1 => 2 => 3 => 4 

let linkList = new linkNodeList();
linkList.append(1);
linkList.append(2);
linkList.append(3);
linkList.append(4);
linkList.print();
console.log(linkList.length)

