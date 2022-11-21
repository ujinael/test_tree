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
        const chilren = this.getChildren(id);
        if (!chilren.length)
            return [];
        else {
            return [...chilren, ...chilren.flatMap(c => this.getAllChildren(c.id))];
        }
    }
    getAllParents(id) {
        const item = this.getItem(id);
        if (!item || item.parent === "root")
            return [];
        else {
            const parent = this.items.find(i => i.id === item.parent);
            return [parent, ...this.getAllParents(parent.id)];
        }
    }
    getRecursiveParent(item, result) {
        if (item.parent === "root")
            return;
        else {
            const parent = this.items.find(i => i.id === item.parent);
            if (!parent)
                return;
            result.push(parent);
            this.getRecursiveParent(parent, result);
        }
    }
}
exports.TreeStore = TreeStore;
