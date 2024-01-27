import Node from "./Node";

export default class LinkedList {
  head = null;
  tail = null;
  size = 0;

  add(valuePair) {
    if (this.size > 0) {
      let node = this.head;
      while (node !== null) {
        if (node.data.key === valuePair.key) {
          node.data.value = valuePair.value;
          return node;
        }
        node = node.next;
      }
    }
    this.append(valuePair);
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

  get(key, dataType = "value") {
    let node = this.head;
    while (node !== null) {
      if (key === node.data.key) return node.data[dataType];
      node = node.next;
    }
    return null;
  }

  has(key) {
    return this.get(key) !== null;
  }

  remove(key) {
    let node = this.head;
    if (node.data.key === key) {
      let tmp = node;
      this.head = node.next;
      this.size -= 1;
      return tmp;
    }

    let priorNode = null;
    while (node !== null) {
      if (node.data.key === key) {
        priorNode.next = node.next;
        return node;
      }
      [priorNode, node] = [node, node.next];
      this.size -= 1;
    }
    return null;
  }

  getKeys() {
    let node = this.head;
    let keyArray = [];
    while (node !== null) {
      keyArray.push(node.data.key);
      node = node.next;
    }
    return keyArray;
  }

  getValues() {
    let node = this.head;
    let valueArray = [];
    while (node !== null) {
      valueArray.push(node.data.value);
      node = node.next;
    }
    return valueArray;
  }

  getEntries() {
    let node = this.head;
    let entriesArray = [];
    while (node !== null) {
      entriesArray.push([node.data.key, node.data.value]);
      node = node.next;
    }
    return entriesArray;
  }

  pop() {
    if (this.size === 0) return null;
    if (this.size === 1) {
      const tmp = this.head;
      this.head = null;
      this.tail = null;
      this.size -= 1;
      return tmp;
    }

    let node = this.head;
    while (node.next !== this.tail) {
      node = node.next;
    }
    const tmp = this.tail;
    [node, this.tail] = [null, node];
    this.size -= 1;
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

  toString(node = this.head) {
    let nodeString = "";
    while (node !== null) {
      nodeString += `(${node.data}) → `;
      node = node.next;
    }
    nodeString += "(null)";
    return nodeString;
  }
}
