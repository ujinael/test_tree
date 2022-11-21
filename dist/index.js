"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tree_store_1 = require("./tree-store");
const items_1 = require("./items");
const ts = new tree_store_1.TreeStore(items_1.items);
console.log(ts.getAll());
console.log(ts.getItem(2));
console.log(ts.getChildren(2));
console.log(ts.getChildren(7));
