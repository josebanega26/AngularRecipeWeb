import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingService } from "../../services/shopping.service";
import { Subscription } from "rxjs";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.scss"],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild("form") slForm: NgForm;
  constructor(private shoppingService: ShoppingService) {}
  ingredient: Ingredient = new Ingredient("", 0);
  editSubscription: Subscription;
  editing: boolean = false;
  id:number

  ngOnInit(): void {
    this.editSubscription = this.shoppingService.startEditing.subscribe(
      (id) => {
        this.editing = true;
        this.id= id
        this.ingredient = this.shoppingService.getEditIngredient(id);
        this.slForm.setValue({ newIngredient: this.ingredient });
      }
    );
  }
  ngOnDestroy() {
    this.editSubscription.unsubscribe();
  }
  clearData() {
    this.editing = false;
    this.slForm.reset();
  }

  deleteData(){
    this.shoppingService.deleteIngredient(this.id)
  }
  addIngredient(form: any) {
    if (this.editing) {
      this.shoppingService.updateIngredient(this.id,form.value.newIngredient)
    } else {
      this.shoppingService.addIngredient(form.value.newIngredient);
    }
    this.editing = false;
    form.reset()
  }
}
