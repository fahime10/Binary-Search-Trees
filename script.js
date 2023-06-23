import { Tree } from "./modules/tree.js";

let array = [1, 2, 3, 4, 6, 7, 8, 10, 14, 19, 20, 25, 26, 40, 75, 100];
let bst = new Tree(array);

console.log(bst.levelOrder());

bst.printTree();
console.log("Inorder: " + bst.inorder());
console.log("Preorder: " + bst.preorder());
console.log("Postorder: " + bst.postorder());
console.log("Height is " + bst.height());
console.log("Depth of 8 is " + bst.depth(8));
console.log("Is this tree balanced? " + bst.isBalanced());

let array2 = [1, 7, 4, 23, 8, 4, 3, 5, 7, 9, 67, 6345, 324];
let bst2 = new Tree(array2);

bst2.insert(2);
bst2.insert(34);
bst2.insert(333);
bst2.insert(4556);
bst2.insert(6);
bst2.insert(22);
bst2.insert(3455);
bst2.rebalance();
bst2.printTree();