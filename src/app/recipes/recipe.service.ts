import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipes.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'test recipe',
      'desc',
      'https://get.pxhere.com/photo/dish-meal-food-vegetable-recipe-cuisine-vegetarian-food-parmigiana-1417897.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'test recipe2',
      'desc2',
      'https://get.pxhere.com/photo/dish-meal-food-vegetable-recipe-cuisine-vegetarian-food-parmigiana-1417897.jpg',
      [new Ingredient('Bread', 2), new Ingredient('Tomatoes', 1)]
    ),
  ];

  getRecipes() {
    //returning this.recipes will return the array from the RecipeServices
    // and thus will change the array on the service, so we use slice to return a copy instead
    return this.recipes.slice();
  }
}
