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
        this.array = this.buildTree(array, 0, array.length - 1);
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
      prettyPrint(this.array);
    }

    insert(value, array = this.array) {
      if (array == null) {
        return (array = new Node(value));
      }

      if (array.value < value) {
        array.right = this.insert(value, array.right);
      } else {
        array.left = this.insert(value, array.left);
      }

      return array;
    }

    delete(value, array = this.array) {
      if (array == null) {
        return array;
      }

      if (array.value > value) {
        array.left = this.delete(value, array.left);
      } else if (array.value < value) {
        array.right = this.delete(value, array.right);
      } else {
        if (array.left == null) {
          return array.right;
        } else if (array.right == null) {
          return array.left;
        }

        array.value = minValue(array);
        array.right = this.delete(array.right, array.value);
      }

      return array;
    }

    // helper function to supply the minimum value in the array
    minValue(array) {
      let min = array.value;

      while (array != null) {
        min = array.value;
        array = array.left;
      }

      return min;
    }
    
}