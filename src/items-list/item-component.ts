import {Component, Inject, Input} from "@angular/core";
import {ItemsListActions} from "./items-list-actions.ts";

@Component({
    selector: "item",
    providers: [ItemsListActions],
    templateUrl: "./src/items-list/item.html"
})
export class Item {
    @Input("details") details;

    constructor(@Inject(ItemsListActions) private actions) {
    }

    removeItem(item) {
        this.actions.removeItem(item.id);
    }
}
