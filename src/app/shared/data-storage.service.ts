import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipes.model';
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' }) // alternative to setting this in providers in app.module.ts
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes(): void {
    const recipes = this.recipeService.getRecipes();
    // need to put json, it is a firebase characteristic - firebase will overwrite database content with a put request
    this.http
      .put(
        'https://ng-course-recipe-app-4eeb9-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchRecipes(): any {
    // take = take 1 value from observable and automatically unsubscribe
    // exhaustMap combines observables together
    // return this.authService.user.pipe(
    //   take(1),
    //   exhaustMap((user) => {
    return this.http
      .get<Recipe[]>(
        'https://ng-course-recipe-app-4eeb9-default-rtdb.firebaseio.com/recipes.json'
        // { params: new HttpParams().set('auth', user.token) }
      )
      .pipe(
        map((recipes: Recipe[]) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        })
      );
    //   })
    // );
  }
}
