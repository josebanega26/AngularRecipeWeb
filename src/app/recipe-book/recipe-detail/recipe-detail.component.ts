import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
import { ShoppingService } from "../../services/shopping.service";
import { ActivatedRoute , Router} from "@angular/router";
import { RecipeService } from "../../services/recipe.service";
@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.scss"]
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  constructor(
    private shoppingService: ShoppingService,
    private goRoute: Router,
    private router: ActivatedRoute,
    private recipeService: RecipeService
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
    this.shoppingService.addIngredients(this.recipe.ingredients);
  }
  deleteRecipe(){
    this.recipeService.DeleteRecipe(this.id)
    this.goRoute.navigate(['../'],{relativeTo:this.router})
  }
}
