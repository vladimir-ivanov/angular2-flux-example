///<reference path="../typings/es6-shim.d.ts"/>
import dispatcher from "../dispatcher";

export const REMOVE_ITEM = "REMOVE_ITEM";
export const ADD_ITEM = "ADD_ITEM";

export class ItemsListActions {
    addItem(name) {
        dispatcher.dispatch({
            type: ADD_ITEM,
            data: {
                name: name,
                id: Symbol()
            }
        });
    }

    removeItem(id) {
        dispatcher.dispatch({
            type: REMOVE_ITEM,
            data: id
        });
    }
}
