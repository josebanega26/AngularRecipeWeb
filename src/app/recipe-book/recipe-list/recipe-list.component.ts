import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import {Recipe} from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [ 
    new Recipe('Papa Brava',
                'Locas Papas bravas',
                'https://www.inspiredtaste.net/wp-content/uploads/2018/12/Sauteed-Zucchini-Recipe-1-1200.jpg'),
    new Recipe('Papa Brava 2',
                'Locas Papas bravas',
                'https://www.inspiredtaste.net/wp-content/uploads/2018/12/Sauteed-Zucchini-Recipe-1-1200.jpg'),

              ]
  recipe: Recipe;
  @Output() onRecipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }
  recipeSelected(recipeDetail:Recipe){
    this.onRecipeSelected.emit(recipeDetail)
  }

}
