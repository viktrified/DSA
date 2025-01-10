class BinaryNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const newNode = new BinaryNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    const queue = [this.root];
    while (queue.length) {
      const current = queue.shift();
      if (!current.left) {
        current.left = newNode;
        return;
      }
      if (!current.right) {
        current.right = newNode;
        return;
      }
      queue.push(current.left, current.right);
    }
  }

  depthFirstSearch(value) {
    const stack = [this.root];
    while (stack.length) {
      const current = stack.pop();
      console.log(current.value)
      if (current.value === value) return current;
      if (current.right) stack.push(current.right);
      if (current.left) stack.push(current.left);
    }
    // return null;
  }

  breadthFirstSearch(value) {
    const queue = [this.root];
    while (queue.length) {
      const current = queue.shift();
      console.log(current.value)
      if (current.value === value) return current;
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    // return null;
  }
}

const tree = new BinaryTree();
tree.add(1);
tree.add(2);
tree.add(3);
tree.add(4);
tree.add(5);

console.log(`depth-first search ${tree.depthFirstSearch(3)}`); 
console.log(`breadth-first search ${tree.breadthFirstSearch(5)}`); 