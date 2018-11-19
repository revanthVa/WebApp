import { Component, OnInit } from '@angular/core';
import { BeersService, Beer} from '../beers.service';

@Component({
  selector: 'app-beerslist',
  templateUrl: './beerslist.component.html',
  styleUrls: ['./beerslist.component.css']
})
export class BeerslistComponent implements OnInit {

  beers: Beer[];

  constructor(
    public BeerService: BeersService
  ) { 
    this.getBeers();
  }

  ngOnInit() {
  }
  getBeers() {
    this.BeerService.getBeers().subscribe(
      data => {
        this.beers = data;
      },
      error => {
        alert('Could not retrieve a list of beer');
      }
    )
  }

}
