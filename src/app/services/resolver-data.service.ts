import { Injectable } from "@angular/core";
import { Recipe } from "../recipe-book/recipe.model";
import { RecipeService } from "../services/recipe.service";
import { DataStorageService } from "./data-storage.service";
import {
  Router,
  ActivatedRoute,
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";

@Injectable({ providedIn: "root" })
export class ResolverDataService implements Resolve<Recipe[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private recipeService: RecipeService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipeService.getRecipes();
    if (recipes.length === 0) {
      return this.dataStorageService.fetchRecipes();
    }  
    return recipes;
  }
}
