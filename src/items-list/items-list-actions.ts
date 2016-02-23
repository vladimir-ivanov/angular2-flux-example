import dispatcher from "../dispatcher";

export const REMOVE_ITEM = "REMOVE_ITEM";
export const ADD_ITEM = "ADD_ITEM";

export class ItemsListActions {
    addItem(name) {
        dispatcher.emit({
            type: ADD_ITEM,
            data: {
                name: name,
                id: Symbol()
            }
        });
    }

    removeItem(id) {
        dispatcher.emit({
            type: REMOVE_ITEM,
            data: id
        });
    }
}
