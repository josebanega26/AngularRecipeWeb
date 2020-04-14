import { Recipe } from "../recipe-book/recipe.model";
import {Ingredient} from '../shared/ingredient.model'
import { Subject } from 'rxjs';
export class RecipeService {
  onRecipeSelected = new Subject<Recipe>();
  recipeChanged = new Subject<Recipe[]>();
  recipes: Recipe[] = [];
  
  getRecipeById(id:number){
    return this.recipes[id]
  }
  getRecipes(){
    return this.recipes.slice()
  }
  
  setRecipes(recipes: Recipe[]){
    this.recipes= recipes
    this.recipeChanged.next(this.recipes.slice())
  }
  get recipeLength(){ 
   return this.recipes.length -1
  }
  AddRecipe( recipe: Recipe){
    this.recipes.push(recipe)
    this.recipeChanged.next(this.recipes.slice())
  }


  UpdateRecipe( recipe: Recipe){
    this.recipes.splice(recipe.id,1,recipe)
    this.recipeChanged.next(this.recipes.slice())
  }

  DeleteRecipe( id: number){
    this.recipes.splice(id,1)
    this.recipeChanged.next(this.recipes.slice())
  }
  
}
