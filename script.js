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