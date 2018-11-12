import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
  


   private recipes: Recipe[] = [
        new Recipe('Chicken',
        'Chicken Recipe by Shubham Wade',
        'https://fyi.uwex.edu/news/files/2018/07/food-2938807_1920.jpg',
        [
          new Ingredient('meat', 1),
          new Ingredient('rice',2)
        ]),
        new Recipe('Paav Bhaji',
        'Paav Bhaji Recipe by Tushar Dattu',
        'https://140721-408454-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2013/10/Pav-Bhaji-768x1043.jpg',
        [
          new Ingredient('bhaji',1),
          new Ingredient('paav',4)
        ]),
        new Recipe('Chicken Nachos',
        'Chicken Nachos Recipe by Kishor Chavan',
        'https://www.landolakes.com/RecipeManagementSystem/media/Recipe-Media-Files/Recipes/Retail/x17/17784-chicken-nachos-on-the-grill-600x600.jpg?ext=.jpg',
        [
          new Ingredient('chips',10),
          new Ingredient('meat', 3)
        ])
      ];

      constructor(private slService: ShoppingListService){}

    getRecipes(){
       return this.recipes.slice();
    }

    getRecipe(index: number){
      return this.recipes[index];
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]){
      this.slService.addIngredients(ingredients);
    }

}