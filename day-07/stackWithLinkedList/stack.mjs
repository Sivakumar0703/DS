import Linkedlist from "./LinkedList.mjs";

class LinkedListStack {

    constructor(){
        this.list = new Linkedlist();
    }

    push(value){
        return this.list.prepend(value);
    }

    pop(){
        return this.list.removeFrontFront();
    }

    peek(){
        return this.list.head.value;
    }

    getSize(){
        return this.list.length();
    }

    isEmpty(){
        return  this.list.size === 0
    }

    print(){
        return this.list.print()
    }
}

const stack = new LinkedListStack();
console.log("is stack empty",stack.isEmpty());
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log("list" , stack.print());
console.log("list size",stack.getSize());
console.log("pop",stack.pop());
console.log("list" , stack.print());
console.log("peek" , stack.peek());