import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { Ingredient } from "../../shared/ingredient.model";
import { Subscription } from "rxjs";
import { NgForm } from "@angular/forms";
import { Store } from "@ngrx/store";
import * as shoppingListActions from "../store/shopping-list.action";
import {AppState} from '../../store/app.store'
@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.scss"],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("form") slForm: NgForm;
  constructor(private store: Store<AppState>) {}
  ingredient: Ingredient = new Ingredient("", 0);
  editSubscription: Subscription;
  editing: boolean = false;
  id: number;

  ngOnInit(): void {
    this.store
      .select("shoppingList")
      .subscribe(({ editItem, editItemIndex }) => {
        if (editItemIndex > -1) {
          this.editing = true;
          this.id = editItemIndex;
          this.ingredient = editItem;
          this.slForm.setValue({ newIngredient: this.ingredient });
        } else {
          this.editing = false;
        }
      });
  }

  clearData() {
    this.store.dispatch(new shoppingListActions.stopEdit());
    this.editing = false;
    this.slForm.reset();  
  }

  deleteData() {
    this.store.dispatch(new shoppingListActions.DeleteIngredient(this.id));
  }
  addIngredient(form: any) {
    if (this.editing) {
      this.store.dispatch(
        new shoppingListActions.UpdateIngredient({
          id: this.id,
          ingredient: form.value.newIngredient,
        })
      );
    } else {
      this.store.dispatch(
        new shoppingListActions.AddIngredient(form.value.newIngredient)
      );
    }
    this.editing = false;
    form.reset();
  }
}
