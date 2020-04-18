import { Injectable } from "@angular/core";
import { HttpClient , HttpParams} from "@angular/common/http";
import { RecipeService } from "./recipe.service";
import { Recipe } from "../recipe-book/recipe.model";
import { map, tap } from "rxjs/operators";
import { AuthService } from "./auth.service";
const API: string = "https://webrecipe-e3fda.firebaseio.com/recipes.json";

@Injectable({ providedIn: "root" })
export class DataStorageService {
  constructor(
    private recipeService: RecipeService,
    private httpClient: HttpClient,
    private authService:  AuthService,
  ) {}
  
  userSubject;
  storageRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.httpClient.put(API, recipes).subscribe((params: any) => {
    });
  }
  fetchRecipes() {
    let dataUser
    this.userSubject = this.authService.userSubject.subscribe(user => {
      dataUser = user})
    return this.httpClient.get<Recipe[]>(API,{
      params: new HttpParams().set('auth',dataUser._token)
    }).pipe(
      map((recipes: Recipe[]) =>
        recipes.map((recipe: Recipe) =>
          recipe.ingredients.length ? recipe : { ...recipes, ingredients: [] }
        )
      ),
      tap((recipes: any[]) => {
        this.recipeService.setRecipes(recipes);
      })
    );
  }
}
