class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.listLength = 0;
  }

  appendNode(value) {
    const node = new Node(value);
    this.listLength++;

    if (!this.head || !this.tail) {
      this.head = node;
      this.tail = node;
      return this;
    }

    this.tail.next = node;
    this.tail = node;

    return this;
  }

  deleteNodeByValue(value) {
    let currentNode = this.head;
    let prevNode = null;

    // listLength === 1 and value === head
    if (this.head.value === value && this.listLength === 1) {
      this.head = null;
      this.tail = null;
      this.listLength = 0;

      return this;
    }

    // value === head
    if (this.head.value === value && this.listLength !== 1) {
      this.head = this.head.next;
      currentNode.next = null;
      this.listLength--;

      return this;
    }

    // find node
    while (currentNode.value !== value) {
      if (!currentNode.next) {
        console.log('element not found');
        return;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    // value === tail
    if (!currentNode.next) {
      this.tail = prevNode;
      prevNode.next = null;
      this.listLength--;

      return this;
    }

    // delete node
    prevNode.next = currentNode.next;
    currentNode.next = null;
    this.listLength--;

    return this;
  }

  getNodes() {
    let currentNode = this.head;
    const nodes = [];

    while (currentNode) {
      nodes.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  getListLength = () => this.listLength;
}

let list = new LinkedList()
  .appendNode(8)
  .appendNode(9)
  .appendNode(10)
  .appendNode(11)
  .appendNode(12);

console.log(list.getListLength());
list.deleteNodeByValue(12);
console.log(list.getListLength());
console.log(list.getNodes());
