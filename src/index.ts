import { TreeStore } from "./tree-store";
import {items} from "./items"

const ts = new TreeStore(items)

console.log(ts.getAll());

console.log(ts.getItem(2));
console.log(ts.getChildren(2));

console.log(ts.getAllChildren(1))

console.log(ts.getAllParents(1))
console.log(ts.getAllParents(2))
console.log(ts.getAllParents(8))