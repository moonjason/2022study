class LinkedList {
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
}

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}