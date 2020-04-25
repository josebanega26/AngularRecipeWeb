import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeBookRoutingModule } from './recipe-book-routing.module';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { NoRecipeComponent } from './no-recipe/no-recipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RecipeBookComponent } from './recipe-book.component';

@NgModule({
  declarations: [
    RecipeEditComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    NoRecipeComponent,
    RecipeBookComponent
  ],
  imports: [
    CommonModule,
    RecipeBookRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    SharedModule
  ]
})
export class RecipeBookModule { }
