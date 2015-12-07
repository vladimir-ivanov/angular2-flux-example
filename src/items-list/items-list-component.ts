import {Component, Inject, CORE_DIRECTIVES, NgFor} from "angular2/angular2";
import {ItemsListActions} from "./items-list-actions";
import {ItemsListStore} from "./items-list-store";
import {Item} from "./item-component";
import {AddItemComponent} from "./add-item-component";

@Component({
    selector: "items-list",
    directives: <Array<any>>[CORE_DIRECTIVES, NgFor, Item, AddItemComponent],
    providers: [ItemsListActions, ItemsListStore],
    templateUrl: "./src/items-list/items-list.html"
})
export class ItemsListComponent {
    actions:ItemsListActions;
    store:ItemsListStore;

    items;

    constructor(@Inject(ItemsListActions)actions, @Inject(ItemsListStore)store) {
        this.store = store;
        this.actions = actions;
        this.items = this.store.getItems();

        this.store.subscribe(() => {
            this.items = this.store.getItems();
        });
    }
}
