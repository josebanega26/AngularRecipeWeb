import { Pipe, PipeTransform } from "@angular/core";
import { Recipe } from "../recipe-book/recipe.model";

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
  transform(recipes: Recipe[], filterValue: string ="", key: string): unknown {
    if (filterValue === "") {
      return recipes;
    }
    return recipes.filter((recipe) => {
      
      return recipe[key].toLowerCase().includes(filterValue.toLowerCase());
    });
  }
}
