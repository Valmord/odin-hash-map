import Node from "./Node";

export default class LinkedList {
  head = null;
  tail = null;
  size = 0;

  set head(node) {
    this.head = node;
    return node;
  }

  get head() {
    return this.head;
  }

  get tail() {
    return this.tail;
  }

  set tail(node) {
    this.tail = node;
    return node;
  }

  append(value) {
    const node = new Node(value);
    if (this.head === null) this.head = node;
    if (this.tail !== null) this.tail.next = node;
    this.tail = node;
    this.size += 1;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.size === 0) [this.head, this.tail] = [node, node];
    else [node.next, this.head] = [this.head, node];
    this.size += 1;
  }

  at(index) {
    if (index > this.size) return "Index cannot exceed list size";
    let node = this.head;
    for (let i = 0; i <= index; i++) {
      if (index === i) return node;
      node = node.next;
    }
  }

  find(value) {
    let node = this.head;
    let count = 0;
    while (node !== null) {
      if (node.data === value) return count;
      node = node.next;
      count += 1;
    }
    return null;
  }

  pop() {
    let node = this.head;
    while (node.next !== this.tail) {
      node = node.next;
    }
    const tmp = this.tail;
    [this.tail, node.next] = [node, null];

    return tmp;
  }

  contains(value) {
    let node = this.head;
    while (node !== null) {
      if (node.data === value) return true;
      node = node.next;
    }
    return false;
  }

  insertAt(index, value) {
    if (index > this.size) return "Invalid Index";
    let node = this.head;
    while (index-- > 1) {
      node = node.next;
    }
    const newNode = new Node(value);
    [newNode.next, node.next] = [node.next, newNode];
    this.size += 1;
    return newNode;
  }

  removeAt(index) {
    if (index > this.size) return "Invalid Index";
    let node = this.head;
    while (index-- > 1) {
      node = node.next;
    }
    const tmp = node.next;
    node.next = tmp.next;
    this.size -= 1;
    return tmp;
  }

  toString(node = this.head) {
    let nodeString = "";
    while (node !== null) {
      nodeString += `(${node.data}) → `;
      node = node.next;
    }
    nodeString += "(null)";
    return nodeString;
  }

  print(node = this.head) {
    const nodeArray = [];
    while (node !== null) {
      nodeArray.push(node.data);
      node = node.next;
    }
    console.log(nodeArray);
  }
}
