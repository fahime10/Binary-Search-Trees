import { Tree } from "./modules/tree.js";

let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
let bst = new Tree(array);
// bst.printTree();

console.log(bst.levelOrder());

bst.printTree();
console.log("Inorder: " + bst.inorder());
console.log("Preorder: " + bst.preorder());
console.log("Postorder: " + bst.postorder());