import { Component, OnInit } from '@angular/core';
import {ShoppingService} from '../services/shopping.service'
import {Ingredient} from '../shared/ingredient.model'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  constructor(private shoppingService: ShoppingService) { }
  ingredients: Ingredient[];
  ngOnInit(): void {
  this.ingredients= this.shoppingService.getIngredients()
  this.shoppingService.ingredientsChanged
    .subscribe((ingredients:Ingredient[])=>(this.ingredients=ingredients))
  }
  
  onEditItem(id:number){
    this.shoppingService.startEditing.next(id)
  }
}
