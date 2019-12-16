class LinkedListNode {
  constructor(value) {
    this.value = value;
    this._nextNode = null;
  }
  get nextNode() {
    return this._nextNode;
  }
  set nextNode(node) {
    validateNode(node, { acceptNull: true });
    this._nextNode = node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // add a node to its beginning
  addFirst(_newNode) {
    validateNode(_newNode);
    if (this.head === null && this.tail === null) {
      // this is going to be the first node
      this.head = _newNode;
      this.tail = _newNode;
    } else if (this.head !== null && this.tail !== null) {
      // add the new node to the beginning of the chain
      _newNode.nextNode = this.head;
      this.head = _newNode;
    }
  }

  // add a node to its end
  addLast(_newNode) {
    validateNode(_newNode);
    if (this.head === null && this.tail === null) {
      // this is going to be the first node
      this.head = _newNode;
      this.tail = _newNode;
      return;
    } else if (this.head !== null && this.tail !== null) {
      // add the new node to the end of the chain
      this.tail.nextNode = _newNode;
      this.tail = _newNode;
      return;
    }
  }

  // remove a node from its beginning
  removeFirst() {
    if (this.head === null && this.tail === null) {
      // no nodes in the list
      return;
    } else if (this.head === this.tail) {
      // only one node in the list
      this.head = null;
      this.tail = null;
      return;
    } else if (this.head !== null && this.tail !== null) {
      // move the head pointer to the second node,
      // and the original first node will be garbage collected
      this.head = this.head.nextNode;
      return;
    }
  }

  // remove a node from its end
  removeLast() {
    if (this.head === null && this.tail === null) {
      // no nodes in the list
      return;
    } else if (this.head === this.tail) {
      // only one node in the list
      this.head = null;
      this.tail = null;
      return;
    } else if (this.head !== null && this.tail !== null) {
      // find the second last node from the chain
      let current = this.head
      let previous = null;
      while (current.nextNode !== null) {
        previous = current;
        current = current.nextNode;
      }
      const newLastNode = previous;

      // move the tail pointer to the second last node,
      // and the original last node will be garbage collected
      this.tail = newLastNode;
      newLastNode.nextNode = null;
    }
  }

  // find the first node with a given value
  findFirst(_value) {
    if (this.head === null && this.tail === null) {
      // no nodes in the list
      return null;
    } else {
      // check each node's value one by one from the beginning of the chain
      let current = this.head;
      while (current.nextNode !== null) {
        if (current.value === _value) return current; // found
        current = current.nextNode;
      }
      return null;
    }
  }

  // find the last node with a given value
  findLast(_value) {
    if (this.head === null && this.tail === null) {
      // no nodes in the list
      return null;
    } else {
      // check each node's value one by one from the beginning of the chain
      // and overwrite it everytime it's found
      let current = this.head;
      let foundNode = null;
      while (current.nextNode !== null) {
        if (current.value === _value) foundNode = current; // found
        current = current.nextNode;
      }
      return foundNode;
    }
  }

  // log all values in the list
  logValues() {
    let logString = '[';
    let node = this.head;
    while(node !== null) {
      logString += node.value + ', ';
      node = node.nextNode;
    }
    if (logString.length > 1) logString = logString.slice(0, -2); // remove extra comma
    logString += ']';
    console.log(logString);
  }
}

function validateNode(node, option) {
  if (!(node instanceof LinkedListNode)) {
    if (option && option.acceptNull && node === null) return;
    throw 'TypeError: only LinkedListNode type is accepted';
  }
}

module.exports = {
  LinkedListNode,
  LinkedList,
};
