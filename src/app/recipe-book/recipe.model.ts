import {Ingredient} from '../shared/ingredient.model'
export class Recipe {
    public title: string;
    public description: string;
    public imageUrl: string;
    public ingredients : Ingredient[];
    constructor(
        title: string,
        description: string,
        imageUrl: string,
        ingredients : Ingredient[]) {
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.ingredients = ingredients;
    }

}