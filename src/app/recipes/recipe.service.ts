import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ShopppingListService } from './../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { Ingredient } from './../shared/ingredient.model';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [];

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'A Test Recipe',
  //     'This is a test',
  //     'https://live.staticflickr.com/5496/31479301445_cb53c0f4e9_b.jpg',
  //     [ new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]),
  //   new Recipe(
  //     'A Test Another',
  //     'This is a test',
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7ORC6RT80GiI0x8SY6s5_Vwdvi_fPSi-UVcy4i9bdLy5VyHaX',
  //     [new Ingredient('Buns', 2), new Ingredient('Meat', 1)])
  // ];

  constructor(private slService: ShopppingListService) { }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next([ ...this.recipes ]);
  }

  getRecipes() {
    return [ ...this.recipes ];
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next([ ...this.recipes ]);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next([ ...this.recipes ]);
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next([ ...this.recipes ]);
  }
}
