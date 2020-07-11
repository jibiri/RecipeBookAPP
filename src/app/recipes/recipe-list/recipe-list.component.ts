import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Just a description', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    // tslint:disable-next-line:max-line-length
    new Recipe('Cafe de adria', 'viene con un sobre especial 😁', 'https://cdn.pixabay.com/photo/2017/07/16/20/45/sugar-2510536_960_720.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
