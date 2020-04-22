import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model'
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ShoppingListAction from '../shopping-list/store/shopping-list.action'
import {AppState} from '../store/app.store'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  constructor(
    
    private store: Store<AppState>) { }

  ingredients: Observable<{ingredients: Ingredient[]}> ;
  ngOnInit(): void {
  
  this.ingredients = this.store.select('shoppingList')
  
  }
  
  onEditItem(id:number){
    this.store.dispatch(new ShoppingListAction.startEdit(id))
    // this.shoppingService.startEditing.next(id)
  }
}
