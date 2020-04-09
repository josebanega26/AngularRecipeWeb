import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { RecipeService } from "../../services/recipe.service";
import { Recipe } from "../recipe.model";
import { FormGroup, FormControl, FormArray } from "@angular/forms";
@Component({
  selector: "app-recipe-edit",
  templateUrl: "./recipe-edit.component.html",
  styleUrls: ["./recipe-edit.component.scss"],
})
export class RecipeEditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}
  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;
  recipeOnEdit: Recipe;
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params["id"];
      this.editMode = params["id"] != null;
      this.initForm();
    });
  }

  get controls() {
    // a getter!
    return (<FormArray>this.recipeForm.get("ingredients")).controls;
  }

  onSubmit() {
    console.log("this.recipeForm", this.recipeForm);
  }
  private initForm() {
    let formName = "";
    let formImageUrl = "";
    let formDescription = "";
    let formIngredients = new FormArray([]);
    if (this.editMode) {
      const recipe = this.recipeService.getRecipeById(this.id);
      formName = recipe.title;
      formImageUrl = recipe.imageUrl;
      formDescription = recipe.description;
      for (let index = 0; index < recipe.ingredients.length; index++) {
        formIngredients.push(
          new FormGroup({
            name: new FormControl(recipe.ingredients[index].name),
            amount: new FormControl(recipe.ingredients[index].amount),
          })
        );
      }
    }
    this.recipeForm = new FormGroup({
      title: new FormControl(formName),
      imageUrl: new FormControl(formImageUrl),
      description: new FormControl(formDescription),
      ingredients: formIngredients,
    });
  }
}
