import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DrinkersService, Drinker, TopBeers, Spending, Transacts } from '../drinkers.service';
import {SelectItem} from 'primeng/api';

declare const Highcharts: any;

@Component({
  selector: 'app-drinker-details',
  templateUrl: './drinker-details.component.html',
  styleUrls: ['./drinker-details.component.css']
})


export class DrinkerDetailsComponent implements OnInit {
  onChange(event) {
    console.log(event.value);

    this.drinkerService.getSpending(this.drinkerName, event.value).subscribe(
      data => {
        console.log(data);
        const Barsname = [];
        const total = [];
    
        data.forEach(beer => {
          Barsname.push(beer.Barsname);
          total.push(beer.totalprice);
        });
        this.renderChart2(Barsname, total);
      }
      );
  }
  drinkerName: string;
  drinkerDetails: Drinker;
  transacts: Transacts[];

  topBeers: TopBeers[];
  spending: Spending[];

  weeks: SelectItem[];
  selectedWeek: "monday";


  constructor(
    private drinkerService: DrinkersService,
    private route: ActivatedRoute
    
  ) {
    route.paramMap.subscribe((paramMap) => {
      this.drinkerName = paramMap.get('drinker');

      drinkerService.getDrinker(this.drinkerName).subscribe(
        data => {
          console.log(data);

          this.drinkerDetails = data;
          console.log(this.drinkerDetails);
          console.log(this.drinkerDetails.phone);
        }
      );
      //this.drinkerName = paramMap.get('drinker');
      drinkerService.getTransacts(this.drinkerName).subscribe(
        data => {
          this.transacts= data;
        },
      )
    });
    
   this.drinkerService.getTopBeers(this.drinkerName).subscribe(
    data => {
      console.log(data);
      const BeersBought = [];
      const Quantity = [];
  
      data.forEach(beer => {
        BeersBought.push(beer.beername);
        Quantity.push(beer.quantity);
      });
      this.renderChart(BeersBought, Quantity);
    }
    );
    
    this.drinkerService.getSpending(this.drinkerName, "sunday").subscribe(
      data => {
        console.log(data);
        const Barsname = [];
        const total = [];
    
        data.forEach(beer => {
          Barsname.push(beer.Barsname);
          total.push(beer.totalprice);
        });
        this.renderChart2(Barsname, total);
      }
      );

      this.weeks = [
        {label: 'Sunday', value: 'Sunday'},
        {label: 'Monday', value: 'Monday'},
        {label: 'Tuesday', value: 'Tuesday'},
        {label: 'Wednesday', value: 'Wednesday'},
        {label: 'Thursday', value: 'Thursday'},
        {label: 'Friday', value: 'Friday'},
        {label: 'Saturday', value: 'Saturday'},
    ];

  }

  ngOnInit() {
  }

  renderChart(Beersname: string[], Quantity: number[]) {
    Highcharts.chart('bargraph', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Most Ordered Beers'
      },
      xAxis: {
        categories: Beersname,
        title: {
          text: 'Beer Name'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Quantity'
        },
        overflow: 'justify'
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [{
        data: Quantity
      }]
    });
  }
  renderChart2(Barsname: string[], totalPrice: number[]) {
    Highcharts.chart('bargraph2', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Spending'
      },
      xAxis: {
        categories: Barsname,
        title: {
          text: 'Bar'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Amount Spent'
        },
        overflow: 'justify'
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [{
        data: totalPrice
      }]
    });
  }
}
