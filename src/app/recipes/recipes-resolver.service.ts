import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipes.model';

@Injectable({ providedIn: 'root' })

// runs some code to make sure data is available before navigating to a specific route
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private recipeService: RecipeService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): any[] | Observable<any[]> | Promise<any[]> {
    const recipes = this.recipeService.getRecipes();
    return recipes.length === 0
      ? this.dataStorageService.fetchRecipes()
      : recipes;
  }
}
