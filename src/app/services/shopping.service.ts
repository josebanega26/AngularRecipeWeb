import { Ingredient } from '../shared/ingredient.model'
import { EventEmitter, Injectable } from '@angular/core'
import {RecipeService} from '../services/recipe.service'
@Injectable()
export class ShoppingService {
constructor(private recipeService: RecipeService) {}
ingredientsChanged = new EventEmitter<Ingredient[]>();
private ingredients: Ingredient[] = [
    new Ingredient('Carrot',10),
    new Ingredient('Pie',8),
    new Ingredient('Lemon',5),
  ]

  getIngredients(){
      return this.ingredients.slice()
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient)
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

  addIngredients(ingredients: Ingredient[]){
    console.log('ingredients', ingredients)
    this.ingredients.push(...ingredients)
    console.log('shooping list', this.ingredients)
    this.ingredientsChanged.emit(this.ingredients.slice())
  }
  


}