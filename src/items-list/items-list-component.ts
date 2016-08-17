import {Component, Inject, OnInit, OnDestroy} from "@angular/core";
import {CORE_DIRECTIVES, COMMON_DIRECTIVES} from "@angular/common";
import {ItemsListActions} from "./items-list-actions.ts";
import {ItemsListStore} from "./items-list-store.ts";
import {Item} from "./item-component.ts";
import {AddItemComponent} from "./add-item-component.ts";

@Component({
    selector: "items-list",
    directives: <Array<any>>[CORE_DIRECTIVES, COMMON_DIRECTIVES, Item, AddItemComponent],
    providers: [ItemsListActions, ItemsListStore],
    templateUrl: "./src/items-list/items-list.html"
})
export class ItemsListComponent implements OnInit, OnDestroy {
    items;

    constructor(@Inject(ItemsListActions) private actions, @Inject(ItemsListStore) private store) {
    }

    ngOnInit() {
        this.items = this.store.getItems();

        this.store.subscribe((ev) => {
            if (ev === "changed") {
                this.items = this.store.getItems();
            }
        });
    }

    ngOnDestroy() {
        //  this.store.unsubscribe();
    }
}
