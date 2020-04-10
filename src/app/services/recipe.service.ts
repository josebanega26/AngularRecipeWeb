import { Recipe } from "../recipe-book/recipe.model";
import {Ingredient} from '../shared/ingredient.model'
import { Subject } from 'rxjs';
export class RecipeService {
  onRecipeSelected = new Subject<Recipe>();
  recipeChanged = new Subject<Recipe[]>();
  recipes: Recipe[] = [
    new Recipe(
      "Papa Brava",
      "Locas Papas bravas",
      "https://www.inspiredtaste.net/wp-content/uploads/2018/12/Sauteed-Zucchini-Recipe-1-1200.jpg",
      [
        new Ingredient("Papas", 5),
        new Ingredient("Aji", 2),
        new Ingredient("Lemon", 2)
      ],
      0
    ),
    new Recipe(
      "cheesecake ",
      "the chocolate cheesecake",
      "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2018/06/receta-super-facilisima-de-cheesecake-sin-horno.jpg",
    [
        new Ingredient("cheese", 2),
        new Ingredient("chocolate", 5),
        new Ingredient("Harina", 2)
      ],
      1
    )
  ];
  
  getRecipeById(id:number){
    return this.recipes[id]
  }
  getRecipes(){
    return this.recipes.slice()
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
