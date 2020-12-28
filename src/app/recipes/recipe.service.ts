import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipes.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'test recipe',
      'desc',
      'https://www.brit.co/media-library/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yMTg5MzEyNS9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTYxMTk3MTkyMn0.tqYFgYIz0rZGWgvEVvSAXG9F35y9xdpF3Ks8TQ7fsSM/image.jpg?width=300&quality=85',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'test recipe2',
      'desc2',
      'https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yMTg5MzIwNi9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY1NzgyNTMzMH0.Xx9dx1wOXDVEPfLKk8ihyb1UoGFSVHHnZ4cKh6uFyMk/img.jpg?quality=80&width=300',
      [new Ingredient('Bread', 2), new Ingredient('Tomatoes', 1)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    // returning this.recipes will return the array from the RecipeServices
    // and thus will change the array on the service, so we use slice to return a copy instead
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
