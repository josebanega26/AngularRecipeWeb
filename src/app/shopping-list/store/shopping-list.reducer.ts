import { Ingredient } from "../../shared/ingredient.model";
import {ADD_INGREDIENT,
        ADD_INGREDIENTS,
        DELETE_INGREDIENT,
        UPDATE_INGREDIENT,
        STOP_EDIT,
        START_EDIT,
        ShoppingListActions} from './shopping-list.action'

export interface State  {
    ingredients: Ingredient[],
    editItem: Ingredient,
    editItemIndex: number,
}

export interface AppState{
    shoppingList: State
}
const initialSate = {
ingredients:  [
    new Ingredient("Zanahoria", 10),
    new Ingredient("Pie", 8),
    new Ingredient("Coke cola", 5),
  ],
editItem: new Ingredient(null,null),
editItemIndex: -1,
}

export function ShoppingListReducer(state = initialSate, action: ShoppingListActions){
    switch(action.type){
        case START_EDIT:
            const ingredients = [...state.ingredients]
            const editItem = ingredients[action.payload]
            console.log('editItem', editItem)
            return {
                ...state,
                editItem: editItem,
                editItemIndex: action.payload
            }
        case STOP_EDIT:
            console.log('stop edit')
          return {
                    ...state,
                    editItemIndex: -1,
                    editItem:null
                }
        case ADD_INGREDIENT:
            return { ...state,
                    ingredients: [...state.ingredients, action.payload]
                }
        case ADD_INGREDIENTS:
            return { ...state,
                    ingredients: [...state.ingredients, ...action.payload]
                }
        case UPDATE_INGREDIENT:
            const ingredient = state.ingredients[action.payload.id]
            const newIngredient = {...ingredient, ...action.payload.ingredient }
            const newIngredients = [...state.ingredients]
            newIngredients.splice(action.payload.id,1,newIngredient)
            return { ...state,
                     ingredients: [...newIngredients]
                }
        case DELETE_INGREDIENT:
            return {
                ...state,
                ingredients: [ ...state.ingredients.filter((_,InIndex)=> InIndex !== action.payload )]
            }
        default:
            return state
            }
}




