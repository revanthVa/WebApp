import { Component, OnInit } from '@angular/core';
import { DrinkersService, Drinker, Beer} from '../drinkers.service';

@Component({
  selector: 'app-drinkerslist',
  templateUrl: './drinkerslist.component.html',
  styleUrls: ['./drinkerslist.component.css']
})
export class DrinkerslistComponent implements OnInit {

  beers: Beer[];
  drinkers: Drinker[];

  constructor(
    public DrinkerService: DrinkersService
  ) { 
    this.getDrinkers();
  }

  ngOnInit() {
  }
  getDrinkers() {
    this.DrinkerService.getDrinkers().subscribe(
      data => {
        this.drinkers = data;
      },
      error => {
        alert('Could not retrieve a list of drinker');
      }
    )
  }

}