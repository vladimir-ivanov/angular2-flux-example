import {EventEmitter} from 'angular2/angular2';
import dispatcher from '../dispatcher';
import {ADD_ITEM, REMOVE_ITEM} from "./items-list-actions";

declare interface Payload {
    type: string;
    data: any
}

export class ItemsListStore extends EventEmitter<string> {
    //use immutable - define interface
    private items:Array<{id: string; name: string;}> = [
        {
            id: 'ddd',
            name: 'item 1'
        },
        {
            id: '222',
            name: 'item 2'
        }
    ];

    constructor() {
        super();

        dispatcher.register((payload:Payload) => {
            switch (payload.type) {
                case ADD_ITEM:
                    this.items.push(payload.data);
                    break;

                case REMOVE_ITEM:
                    let itemIndex = this.items.find(item => item.id === payload.data);
                    if(itemIndex !== undefined) {
                        this.items.splice(itemIndex, 1);
                    }

                    break;
            }

            this.emit('changed');
        });
    }

    getItems() {
        return this.items;
    }
}
