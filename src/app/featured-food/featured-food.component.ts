import { Component, OnInit } from '@angular/core';
import { feature } from '../mocks/index';

@Component({
  selector: 'app-featured-food',
  templateUrl: './featured-food.component.html',
  styleUrls: ['./featured-food.component.scss']
})
export class FeaturedFoodComponent implements OnInit {

  featured: any = feature;

  constructor() { }

  ngOnInit() {
  }

}
