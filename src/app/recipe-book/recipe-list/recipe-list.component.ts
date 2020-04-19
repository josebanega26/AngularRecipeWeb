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
  filterValue: string = "";

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.recipeChanged.subscribe((recipes: Recipe[])=>{
      this.recipes = recipes
    })
    this.recipes= this.recipeService.getRecipes()
  }
  
  

}
