import { Component, OnInit , Input, Output , EventEmitter } from '@angular/core';
import {Recipe} from '../../recipe.model'
import {RecipeService} from '../../../services/recipe.service'
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input('recipe') recipeItem: Recipe; 
  @Output('recipeSelected') eventSelect = new EventEmitter<Recipe>();
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    
  }

  itemSelected(){
    this.recipeService.onRecipeSelected.emit(this.recipeItem)
  }

}
