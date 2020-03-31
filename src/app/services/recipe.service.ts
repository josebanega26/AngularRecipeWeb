import { EventEmitter } from '@angular/core';
import {Recipe} from '../recipe-book/recipe.model'

export class RecipeService {
onRecipeSelected= new EventEmitter<Recipe>();    

recipes: Recipe[] = [ 
    new Recipe('Papa Brava',
                'Locas Papas bravas',
                'https://www.inspiredtaste.net/wp-content/uploads/2018/12/Sauteed-Zucchini-Recipe-1-1200.jpg'),
    new Recipe('cheesecake ',
                'the chocolate cheesecake',
                'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2018/06/receta-super-facilisima-de-cheesecake-sin-horno.jpg'),

              ]

    

}