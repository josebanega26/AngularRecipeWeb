import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { RecipeService } from "../../services/recipe.service";
import { Recipe } from "../recipe.model";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";

@Component({
  selector: "app-recipe-edit",
  templateUrl: "./recipe-edit.component.html",
  styleUrls: ["./recipe-edit.component.scss"],
})
export class RecipeEditComponent implements OnInit {
  constructor(
    private goRoute: Router,
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

  onCancel() {
    this.goRoute.navigate(["../"], { relativeTo: this.route });
  }
  addIngredient() {
    (<FormArray>this.recipeForm.get("ingredients")).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }
  onSubmit() {
    const { title, imageUrl, description, ingredients } = this.recipeForm.value;

    if (this.editMode) {
      const recipeUpdated = new Recipe(
        title,
        description,
        imageUrl,
        ingredients,
        this.id
      );
      this.recipeService.UpdateRecipe(recipeUpdated);
    } else {
      const newId = this.recipeService.recipeLength + 1;
      const newRecipe = new Recipe(
        title,
        description,
        imageUrl,
        ingredients,
        newId
      );
      this.recipeService.AddRecipe(newRecipe);
    }
    this.onCancel()
  }

  deleteIngredient(index:number){
    (<FormArray>this.recipeForm.get("ingredients")).removeAt(index)
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
            name: new FormControl(
              recipe.ingredients[index].name,
              Validators.required
            ),
            amount: new FormControl(recipe.ingredients[index].amount, [
              Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/),
            ]),
          })
        );
      }
    }
    this.recipeForm = new FormGroup({
      title: new FormControl(formName, Validators.required),
      imageUrl: new FormControl(formImageUrl, Validators.required),
      description: new FormControl(formDescription, Validators.required),
      ingredients: formIngredients,
    });
  }
}
