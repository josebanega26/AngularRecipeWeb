import { BrowserModule , } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { FormsModule } from '@angular/forms';  
import { AppRoutingModule } from './app-routing.module';
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
import {ShoppingService} from './services/shopping.service';
import { HomePageComponent } from './home-page/home-page.component';
import { NoRecipeComponent } from './recipe-book/no-recipe/no-recipe.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component'

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
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ShoppingService,
              RecipeService]
              ,
  bootstrap: [AppComponent]
})
export class AppModule { }
