import { BrowserModule , } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';  
import { AppRoutingModule } from './app-routing.module';
import {StoreModule} from '@ngrx/store'


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { IngredientComponent } from './shopping-list/ingredient/ingredient.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeItemComponent } from './recipe-book/recipe-list/recipe-item/recipe-item.component'
import {RecipeService} from './services/recipe.service'
import { HomePageComponent } from './home-page/home-page.component';
import { NoRecipeComponent } from './recipe-book/no-recipe/no-recipe.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component'
import {  HttpClientModule } from '@angular/common/http';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { FilterPipe } from './pipes/filter.pipe';

import {ShoppingListReducer} from './shopping-list/store/shopping-list.reducer'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    IngredientComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    ShoppingEditComponent,
    RecipeItemComponent,
    HomePageComponent,
    NoRecipeComponent,
    RecipeEditComponent,
    AuthPageComponent,
    LoadingSpinnerComponent,
    AlertModalComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      shoppingList: ShoppingListReducer
    })
  ],
  providers: [
              RecipeService]
              ,
  bootstrap: [AppComponent]
})
export class AppModule { }
