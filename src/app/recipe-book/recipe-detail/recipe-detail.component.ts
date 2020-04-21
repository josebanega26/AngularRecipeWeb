import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
import { ActivatedRoute , Router} from "@angular/router";
import { RecipeService } from "../../services/recipe.service";
import { Store } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';
import * as ShoppingListAction from '../../shopping-list/store/shopping-list.action'
import {State} from '../../shopping-list/store/shopping-list.reducer'

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.scss"]
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  constructor(
    private goRoute: Router,
    private router: ActivatedRoute,
    private recipeService: RecipeService,
    private store: Store<State>
  ) {}
    id:number;
  ngOnInit(): void {
    this.id = this.router.snapshot.params['id']
    this.recipe = this.recipeService.getRecipeById(this.id)
    this.router.params.subscribe((params)=>(
      this.recipe = this.recipeService.getRecipeById(params['id'])
    ))
  }
  addToShopping() {
    this.store.dispatch(new ShoppingListAction.AddIngredients(this.recipe.ingredients))
  }
  deleteRecipe(){
    this.recipeService.DeleteRecipe(this.id)
    this.goRoute.navigate(['../'],{relativeTo:this.router})
  }
}
