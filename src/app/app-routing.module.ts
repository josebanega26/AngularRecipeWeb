import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeBookComponent } from "./recipe-book/recipe-book.component";
import { NoRecipeComponent } from "./recipe-book/no-recipe/no-recipe.component";
import { RecipeDetailComponent } from "./recipe-book/recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from './recipe-book/recipe-edit/recipe-edit.component'
const routes: Routes = [
  { path: "", component: HomePageComponent },
  {
    path: "recipe",
    component: RecipeBookComponent,
    children: [
      { path: "", component: NoRecipeComponent },
      { path: "new", component: RecipeEditComponent},
      { path: ":id", component: RecipeDetailComponent },
      { path: ":id/edit", component: RecipeDetailComponent },
    ]
  },
  { path: "shopping", component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
