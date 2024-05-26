class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next ? next : null;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  length() {
    return this.size;
  }

  //   inserting head node
  setHead(value) {
    let newNode = new Node(value);
    if (this.head == null) {
      // list is empty
      this.head = newNode;
    } else {
      // list contains some data
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  //   appending new values/new nodes to the list
  append(value) {
    let newNode = new Node(value);
    let tempHead = this.head;
    if (tempHead == null) {
      tempHead = newNode;
      this.head = tempHead;
    } else {
      while (tempHead.next !== null) {
        tempHead = tempHead.next;
      }
      tempHead.next = newNode;
    }
    this.size++;
  }

  //   inserting value/node at particular place in the list
  insert(index, value) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index == 0) {
      this.setHead(value);
    } else {
      let newNode = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      newNode.next = prev.next;
      prev.next = newNode;
      this.size++;
    }
  }

  //   remove particular node from the list
  removeFrom(index) {
    if (index < 0 || index > this.size) {
      return;
    }
    let removeNode;
    if (index == 0) {
      removeNode = this.head;
      this.head = this.head.next;
      this.size--;
      return removeNode.value;
    } else {
      let prevNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        prevNode = prevNode.next;
      }
      removeNode = prevNode.next;
      prevNode.next = removeNode.next;
      this.size--;
      return removeNode.value;
    }
  }

  // remove by value
  removeValue(value) {
    if (this.size == 0) {
      return;
    }
    if (this.head.value == value) {
      this.head = this.head.next;
      this.size--;
      return this.print();
    } else {
      let prevNode = this.head;
      while (prevNode.next && prevNode.next.value != value) {
        prevNode = prevNode.next;
      }
      if (prevNode.next) {
        let removeNode = prevNode.next;
        prevNode.next = removeNode.next;
        this.size--;
        return this.print();
      }
    }
    return null;
  }

  // find the index of given value
  find(value) {
    if (this.size == 0) {
      return;
    }
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value == value) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  // to reverse the list
  reverse() {
    if (this.size == 0) {
      return;
    }

    let prev = null;
    let current = this.head;
    let next;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
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

let list = new Linkedlist();
// setHead(value)
list.setHead(0);
// reverse
list.append(5);
list.append(6);
list.append(7);
console.log("before reversing", list.print());
list.reverse();
console.log("after reversing", list.print());
