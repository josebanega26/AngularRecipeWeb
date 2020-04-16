import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeBookComponent } from "./recipe-book/recipe-book.component";
import { NoRecipeComponent } from "./recipe-book/no-recipe/no-recipe.component";
import { RecipeDetailComponent } from "./recipe-book/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-book/recipe-edit/recipe-edit.component";
import { ResolverDataService } from "./services/resolver-data.service";
import { AuthPageComponent } from "../app/auth-page/auth-page.component";
import { AuthGuard } from "../app/services/auth.guard";
const routes: Routes = [
  { path: "", component: AuthPageComponent },
  { path: "home", component: HomePageComponent },
  {
    path: "recipe",
    canActivate: [AuthGuard],
    component: RecipeBookComponent,
    children: [
      {
        path: "",
        component: NoRecipeComponent,
        resolve: [ResolverDataService],
      },
      { path: "new", component: RecipeEditComponent },
      {
        path: ":id",
        component: RecipeDetailComponent,
        resolve: [ResolverDataService],
      },
      {
        path: ":id/edit",
        component: RecipeEditComponent,
        resolve: [ResolverDataService],
      },
    ],
  },
  {
    path: "shopping",
    component: ShoppingListComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
