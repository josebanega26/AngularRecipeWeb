import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model'
import {ShoppingService} from '../../services/shopping.service'
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingService : ShoppingService){}
  ingredient: Ingredient = new Ingredient("",0);
  ngOnInit(): void {
  }
  addIngredient(){
    this.shoppingService.addIngredient(this.ingredient)
    console.log('ingredient', this.ingredient)
 }
}