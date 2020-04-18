import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter, Injectable } from "@angular/core";
import { RecipeService } from "../services/recipe.service";
import { Subject } from "rxjs";
@Injectable()
export class ShoppingService {
  constructor(private recipeService: RecipeService) {}
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  startEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient("Carrot", 10),
    new Ingredient("Pie", 8),
    new Ingredient("Lemon", 5),
  ];

  getIngredients() {
    return this.ingredients;
  }
  getEditIngredient(id:number){
    return this.ingredients.slice()[id]
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  updateIngredient(id:number, ingredient: Ingredient){
    this.ingredients.splice(id,1,ingredient)
  }
  deleteIngredient(id:number){
    this.ingredients.splice(id,1)
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
