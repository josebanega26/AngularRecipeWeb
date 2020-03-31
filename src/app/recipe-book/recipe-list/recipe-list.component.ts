import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import {Recipe} from '../recipe.model'
import {RecipeService} from '../../services/recipe.service'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes= this.recipeService.recipes
  }
  

}
