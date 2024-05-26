
class Node {
    constructor(value, next) {
      this.value = value;
      this.next = next ? next : null;
    }
  }
  
  class Linkedlist {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    length() {
      return this.size;
    }
  
    //   inserting head node
    prepend(value) {
      let newNode = new Node(value);
      if (this.head == null) { // list is empty     
        this.head = newNode;
        this.tail = newNode;
      } else { // list contains some data
        newNode.next = this.head;
        this.head = newNode;
      }
      this.size++;
    }
  
    //   appending new values/new nodes to the list
    append(value) {
      let newNode = new Node(value);
      if (!this.size) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.size++;
    }

    removeFrontFront(){
      if(!this.size){
        return null
      }

      let value = this.head.value;
      this.head = this.head.next;
      this.size--;
      return value
    }

    removeFromEnd(){
      if(!this.size){
        return null
      }
      const value = this.tail.value;
      if(this.size === 1){
        this.head = null;
        this.tail = null;
      } else {
        let previous = this.head;
        while(previous.next !== this.tail){
          previous = previous.next;
        }
        previous.next = null;
        this.tail = previous;
      }
      this.size--;
      return value
    }
  
 
  
    //   to print the entire list
    print() {
      let data = [];
      let tempHead = this.head;
      while (tempHead !== null) {
        data.push(tempHead.value);
        tempHead = tempHead.next;
      }
      return data;
    }
  }
  
 export default Linkedlist
  