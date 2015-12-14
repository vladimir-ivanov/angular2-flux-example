import {EventEmitter} from "angular2/core";
import {List} from "immutable";
import dispatcher from "../dispatcher";
import {ADD_ITEM, REMOVE_ITEM} from "./items-list-actions";

declare interface Payload {
    type: string;
    data: any;
}

export class ItemsListStore extends EventEmitter<string> {
    private itemsStore = List([
        {
            id: "ddd",
            name: "item 1"
        },
        {
            id: "222",
            name: "item 2"
        }
    ]);

    constructor() {
        super();

        dispatcher.register((payload:Payload) => {
            let oldItemsStore = this.itemsStore;

            switch (payload.type) {
                case ADD_ITEM:
                    this.itemsStore = this.itemsStore.push(payload.data);
                    break;

                case REMOVE_ITEM:
                    let itemIndex = this.itemsStore.find(item => item.id === payload.data);

                    if (itemIndex !== undefined) {
                        this.itemsStore = this.itemsStore.delete(this.itemsStore.indexOf(itemIndex));
                    }
                    break;

                default:
                    break;
            }

            if (!this.itemsStore.equals(oldItemsStore)) {
                this.emit("changed");
            }
        });
    }

    getItems() {
        return this.itemsStore.toArray();
    }
}
