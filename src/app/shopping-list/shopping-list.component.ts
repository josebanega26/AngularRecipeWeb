import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Carrot',10),
    new Ingredient('Pie',8),
    new Ingredient('Lemon',5),

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
