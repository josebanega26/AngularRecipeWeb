import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeBookComponent } from "./recipe-book/recipe-book.component";
import { AuthPageComponent } from "../app/auth-page/auth-page.component";
import { AuthGuard } from "../app/services/auth.guard";

const routes: Routes = [
  { path: "", component: AuthPageComponent },
  { path: "home", component: HomePageComponent },
  {
    path: "recipe",
    canActivate: [AuthGuard],
    loadChildren: () => import('./recipe-book/recipe-book.module').then(m => m.RecipeBookModule).catch(err => console.log(err))
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
