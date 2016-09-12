import {Component, Inject, OnInit, OnDestroy} from "@angular/core";
import {ItemsListActions} from "./items-list-actions.ts";
import {ItemsListStore} from "./items-list-store.ts";

@Component({
    selector: "items-list",
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
