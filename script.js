import { Tree } from "./modules/tree.js";

let array = [1, 2, 3, 4, 5, 6, 7, 8];
let bst = new Tree(array);
bst.printTree();

bst.insert(9);
bst.insert(10);
bst.printTree();

bst.delete(9);
bst.printTree();