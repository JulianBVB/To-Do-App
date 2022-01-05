import { List } from "./list.models";

export class Board {
    constructor(public name: string = "KanbanBoard", public lists: List[]) {}
}