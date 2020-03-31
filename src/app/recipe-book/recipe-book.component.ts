import { Component, OnInit} from '@angular/core';
import {Recipe} from './recipe.model'
import {RecipeService} from '../services/recipe.service'

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.scss']
})
export class RecipeBookComponent implements OnInit {
  recipeSelected:Recipe = null;
  constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {
    this.recipeService.onRecipeSelected
      .subscribe( (recipe:Recipe) => this.recipeSelected = recipe)

  }
}
