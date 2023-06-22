import { Node } from "./node.js";

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

export class Tree {
    constructor(array) {
        this.root = this.buildTree(array, 0, array.length - 1);
    }

    buildTree(array, start, end) {
        if (start > end) {
            return null;
        }

        let mid = parseInt((start + end) / 2);

        let root = new Node(array[mid]);

        root.left = this.buildTree(array, start, mid - 1);
        root.right = this.buildTree(array, mid + 1, end);

        return root;
    }

    printTree() {
      prettyPrint(this.root);
    }

    insert(value, root = this.root) {
      if (root == null) {
        return (root = new Node(value));
      }

      if (root.value < value) {
        root.right = this.insert(value, root.right);
      } else {
        root.left = this.insert(value, root.left);
      }

      return root;
    }

    delete(value, root = this.root) {
      if (root === null) {
        return null;
      }

      if (value < root.value) {
        root.left = this.delete(value, root.left);
      } else if (value > root.value) {
        root.right = this.delete(value, root.right);
      } else {
        if (root.left === null) {
          return root.right;
        } else if (root.right === null) {
          return root.left;
        }

        let minValue = this.findMinValue(root.right);
        root.value = minValue.value;
        root.right = this.delete(minValue.value, root.right);
      }

      return root;
    }

    findMinValue(root) {
      while (root.left !== null) {
        root = root.left;
      }

      return root;
    }

    find(value, root = this.root) {
      if (root === null) {
        return false;
      }

      if (root.value === value) {
        return root;
      }

      if (root.value > value) {
        return this.find(value, root.left);
      } else if (root.value < value) {
        return this.find(value, root.right);
      }

      return root;
    }

    levelOrder() {
      if (this.root === null) {
        return [];
      }

      const queue = [];
      const result = [];

      // push root node in the queue
      queue.push(this.root);

      while (queue.length > 0) {
        // pick first element in the array queue
        let node = queue.shift();
        result.push(node.value);

        if (node.left !== null) {
          queue.push(node.left);
        }

        if (node.right !== null) {
          queue.push(node.right);
        }
      }

      return result;
    }

    // <left><root><right>
    inorder() {
      const array = [];
      this.inorderTraversal(this.root, array);
      return array;
    }

    // helper function used to draw the correct path, left-most first
    // then working its way up to root, and then working on the right 
    // subtree
    inorderTraversal(root, array) {
      if (root !== null) {
        this.inorderTraversal(root.left, array);
        array.push(root.value);
        this.inorderTraversal(root.right, array);
      }
    }

    // <root><left><right>
    preorder() {
      const array = [];
      this.preorderTraversal(this.root, array);
      return array;
    }

    preorderTraversal(root, array) {
      if (root !== null) {
        array.push(root.value);
        this.inorderTraversal(root.left, array);
        this.inorderTraversal(root.right, array);
      }
    }


    // <left><right><root>
    postorder() {
      const array = [];
      this.postorderTraversal(this.root, array);
      return array;
    }

    postorderTraversal(root, array) {
      if (root !== null) {
        this.inorderTraversal(root.left, array);
        this.inorderTraversal(root.right, array);
        array.push(root.value);
      }
    }

    height(root = this.root) {
      if (root === null) {
        return -1;
      } else {
        let left = this.height(root.left);
        let right = this.height(root.right);

        return Math.max(left, right) + 1;
      }
    }

    depth(value, root = this.root, edges = 0) {
      if (root === null) {
        return;
      }

      if (root.value === value) {
        return edges;
      }

      if (root.value < value) {
        return this.depth(value, root.right, (edges + 1));
      } else {
        return this.depth(value, root.left, (edges + 1));
      }
    }
}