import {TreeStore} from "../src/tree-store"
import { Item, items } from "../src/items"
const treeStore = new TreeStore(items)
test("Should be an Item",()=>{
expect(treeStore.getItem(1)).toStrictEqual<Item>({ id: 1, parent: "root" })
expect(treeStore.getItem(2)).toStrictEqual<Item>({ id: 2, parent: 1,type:"test" })
expect(treeStore.getItem(15)).toBeUndefined()
} )
test("Should be an Array of all Items",()=>{
    expect(treeStore.getAll()).toHaveLength(8)
    } )
test("Should be an Array of Child without nested",()=>{
        expect(treeStore.getChildren(1)).toHaveLength(2)
        expect(treeStore.getChildren(2)).toHaveLength(3)
expect(treeStore.getChildren(2)[0].parent).toBe(2)
        } )
test("Should be an Array of Child with nested",()=>{
            expect(treeStore.getAllChildren(1)).toHaveLength(7)
            expect(treeStore.getAllChildren(2)).toHaveLength(5)
    expect(treeStore.getAllChildren(2)[0].parent).toBe(2)
            } )
test("Should be an Array of Parents",()=>{
            expect(treeStore.getAllParents(1)).toHaveLength(0)
            expect(treeStore.getAllParents(2)).toHaveLength(1)
            expect(treeStore.getAllParents(7)).toHaveLength(3)
            expect(treeStore.getAllParents(7)[0].id).toBe(4)


                } )