import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'test recipe',
      'desc',
      'https://get.pxhere.com/photo/dish-meal-food-vegetable-recipe-cuisine-vegetarian-food-parmigiana-1417897.jpg'
    ),
        new Recipe(
      'test recipe2',
      'desc2',
      'https://get.pxhere.com/photo/dish-meal-food-vegetable-recipe-cuisine-vegetarian-food-parmigiana-1417897.jpg'
    )
  ];
  constructor() {}

  ngOnInit(): void { }

  onRecipeSelected(recipe: Recipe): void {
    this.recipeWasSelected.emit(recipe);
  }
}


