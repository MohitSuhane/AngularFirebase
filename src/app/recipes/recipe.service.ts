import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import{DataStorageService} from  "../shared/data-storage.service";
import { map } from 'rxjs/operators';
@Injectable()

export class RecipeService implements OnInit{
  recipesChanged = new Subject<Recipe[]>();
 changedRecipe:Recipe;
  newRec:Recipe;
   recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {}
ngOnInit(){
  
}
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
   
     this.recipes.push(recipe);
     this.recipesChanged.next(this.recipes.slice());
    

  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
    
  }
}
