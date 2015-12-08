import {
    Component,
    Inject, Input,
    FormBuilder,
    Validators,
    ControlGroup,
    FORM_DIRECTIVES,
    CORE_DIRECTIVES
} from "angular2/angular2";
import {ItemsListActions} from "./items-list-actions";

@Component({
    selector: "add-item",
    providers: [ItemsListActions],
    templateUrl: "./src/items-list/add-item.html"
})
export class AddItemComponent {
    actions:ItemsListActions;
    addItemForm;

    constructor(
        @Inject(ItemsListActions) actions,
        @Inject(FormBuilder) formBuilder:FormBuilder
    ) {
        this.actions = actions;
        this.addItemForm = formBuilder.group({
            name: ["", Validators.required]
        });
    }

    addItem($event) {
        $event.preventDefault();

        this.actions.addItem(this.addItemForm.controls["name"].value);
    }
}
