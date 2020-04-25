import { BrowserModule , } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';  
import { AppRoutingModule } from './app-routing.module';
import {StoreModule} from '@ngrx/store'


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { IngredientComponent } from './shopping-list/ingredient/ingredient.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {RecipeService} from './services/recipe.service'
import { HomePageComponent } from './home-page/home-page.component';
import {  HttpClientModule } from '@angular/common/http';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import * as fromApp from './store/app.store'
import {ShoppingListReducer} from './shopping-list/store/shopping-list.reducer'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingListComponent,
    IngredientComponent,
    ShoppingEditComponent,
    HomePageComponent,
    AuthPageComponent,
    LoadingSpinnerComponent,
    AlertModalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(fromApp.appReducer)
  ],
  providers: [
              RecipeService]
              ,
  bootstrap: [AppComponent]
})
export class AppModule { }
