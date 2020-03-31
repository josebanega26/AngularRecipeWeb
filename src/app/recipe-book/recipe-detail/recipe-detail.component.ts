import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../recipe.model'
import {ShoppingService} from '../../services/shopping.service'
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input('recipeSelected') recipe:Recipe;
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    console.log('recipe', this.recipe)
  }
  addToShopping(){
    this.shoppingService.addIngredients(this.recipe.ingredients)
  }

}
