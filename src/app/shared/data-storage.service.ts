import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, tap } from "rxjs/operators";

import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";

import { Subject } from "rxjs";
@Injectable({ providedIn: "root" })
export class DataStorageService {
 
  constructor(private http: HttpClient) {
    
  }
}
