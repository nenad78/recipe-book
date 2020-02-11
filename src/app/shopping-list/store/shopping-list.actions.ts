import { Action } from '@ngrx/store';

import { Ingredient } from './../../shared/ingredient.model';

export const ADD_INGREDEINT = 'ADD_INGREDEINT';

export class AddIngredient implements Action {
  readonly type = ADD_INGREDEINT;

  constructor(public payload: Ingredient) { }

}
