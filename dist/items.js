"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.items = void 0;
exports.items = [
    { id: 1, parent: "root" },
    { id: 2, parent: 1, type: "test" },
    { id: 3, parent: 1, type: "test" },
    { id: 4, parent: 2, type: "test" },
    { id: 5, parent: 2, type: "test" },
    { id: 6, parent: 2, type: "test" },
    { id: 7, parent: 4, type: null },
    { id: 8, parent: 4, type: null },
    { id: 9, parent: 3, type: "test" },
    { id: 10, parent: 3, type: "test" },
    { id: 11, parent: 3, type: "test" },
];