import { Item } from "./items";

export class TreeStore{
constructor( 
   private items:Item[]){
}

getAll(){return this.items}
getItem(id:string|number){return this.items.find(i=>i.id === id)}
getChildren(id:string|number){
    return this.items.filter(i=>i.parent === id)
}
getAllChildren(id:string|number):Array<Item>{
const chilren = this.getChildren(id)
if(!chilren.length)return []
else {
return [...chilren,...chilren.flatMap(c=>this.getAllChildren(c.id))]

}
}


getAllParents(id:number|string):Array<Item>{

const item = this.getItem(id) 
if(!item  || item.parent === "root") return []
else{
const parent = this.items.find(i=>i.id === item.parent)
return [parent!,...this.getAllParents(parent!.id)]
}
}

}