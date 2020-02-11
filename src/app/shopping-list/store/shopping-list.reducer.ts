import { Ingredient } from 'src/app/shared/ingredient.model';

import * as ShoppingListActions from './shopping-list.actions';

const intitialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10),
  ]
};

export const shoppingListReducer = (state = intitialState, action: ShoppingListActions.ShoppingListActions) => {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [ ...state.ingredients, action.payload ]
      };
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [ ...state.ingredients, ...action.payload ]
      };
    default:
      return state;
  }
};
