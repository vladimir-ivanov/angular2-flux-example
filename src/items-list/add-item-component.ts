import {Component, Inject} from "@angular/core";
import {ItemsListActions} from "./items-list-actions.ts";

@Component({
    selector: "add-item",
    providers: [ItemsListActions],
    templateUrl: "./src/items-list/add-item.html"
})
export class AddItemComponent {
    item:string;
    active = true;

    constructor(@Inject(ItemsListActions) private actions) {
    }

    onSubmit() {
        this.actions.addItem(this.item);
    }
}
