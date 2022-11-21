"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeStore = void 0;
class TreeStore {
    items;
    constructor(items) {
        this.items = items;
    }
    getAll() { return this.items; }
    getItem(id) { return this.items.find(i => i.id === id); }
    getChildren(id) {
        return this.items.filter(i => i.parent === id);
    }
    getAllChildren(id) {
        const result = [];
        return result;
    }
}
exports.TreeStore = TreeStore;
