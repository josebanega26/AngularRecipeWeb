import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoRecipeComponent } from './no-recipe/no-recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { ResolverDataService } from '../services/resolver-data.service';
const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeBookRoutingModule { }
