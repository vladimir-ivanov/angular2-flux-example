import {Component, Inject, Input} from "angular2/angular2";
import {ItemsListActions} from "./items-list-actions";

@Component({
    selector: "item",
    providers: [ItemsListActions],
    templateUrl: "./src/items-list/item.html"
})
export class Item {
    actions: ItemsListActions;

    @Input("details")
    details;

    constructor(@Inject(ItemsListActions) actions) {
        this.actions = actions;
    }

    removeItem(item) {
        this.actions.removeItem(item.id);
    }
}
