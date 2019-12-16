const { LinkedListNode, LinkedList } = require('./linked-list');

console.log('start');

// create a linked list
const linkedList = new LinkedList();

const NODE_COUNTS = 100;

// add linked list nodes to it
for (let i = 0; i < NODE_COUNTS; i++) {
  const value = Math.floor(Math.random() * 100);
  const linkedListNode = new LinkedListNode(value);
  linkedList.addLast(linkedListNode);
  // linkedList.logValues();
}

const foundNode = linkedList.findLast(10);
console.log('foundNode', foundNode);

// remove nodes
// for (let i = 0; i < NODE_COUNTS; i++) {
//   linkedList.removeLast();
//   linkedList.logValues();
// }

console.log('end');
