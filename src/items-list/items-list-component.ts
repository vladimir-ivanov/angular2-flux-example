import {Component, Inject, OnInit, OnDestroy} from "angular2/core";
import {ItemsListActions} from "./items-list-actions";
import {ItemsListStore} from "./items-list-store";
import {Item} from "./item-component";
import {AddItemComponent} from "./add-item-component";
import {CORE_DIRECTIVES, COMMON_DIRECTIVES} from "angular2/common";

@Component({
    selector: "items-list",
    directives: <Array<any>>[CORE_DIRECTIVES, COMMON_DIRECTIVES, Item, AddItemComponent],
    providers: [ItemsListActions, ItemsListStore],
    templateUrl: "./src/items-list/items-list.html"
})
export class ItemsListComponent implements OnInit, OnDestroy {
    actions:ItemsListActions;
    store;

    items;

    constructor(@Inject(ItemsListActions)actions, @Inject(ItemsListStore)store) {
        this.store = store;
        this.actions = actions;
    }

    ngOnInit() {
        this.items = this.store.getItems();

        this.store.subscribe(() => {
            this.items = this.store.getItems();
        });
    }

    ngOnDestroy() {
      //  this.store.unsubscribe();
    }
}
