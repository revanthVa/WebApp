import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { SelectItem } from 'primeng/components/common/selectitem';
import { ActivatedRoute } from '@angular/router';
import { barAnalytics, BarsService, beers } from '../bars.service';

declare const Highcharts: any;

@Component({
  selector: 'app-bar-analytics',
  templateUrl: './bar-analytics.component.html',
  styleUrls: ['./bar-analytics.component.css']
})
export class BarAnalyticsComponent implements OnInit {

    barAnalytics: barAnalytics[];
    filterOptions: SelectItem[];
    beers: beers[];
    selectBeers: SelectItem[];
    beersString : string[];
    currDay: string;
    currBeer: string;
  constructor(
    private barService: BarsService,
    private route: ActivatedRoute
  ) { 
    barService.getBeersOnly().subscribe(
      data => {
        console.log(data);
        this.beers = data;
      }
    )
    barService.getBeersOnly().subscribe(
      data => {
        this.selectBeers = data.map(beers => {
          return {
          label: beers.name,
          value: beers.name,
          };
        });
      }
      );

    this.filterOptions = [
      {
        'label': 'Monday',
        'value': 'Monday'
      },
      {
        'label' : 'Tuesday',
        'value' : 'Tuesday'
      },
      {
        'label': 'Wednesday',
        'value': 'Wednesday'
      },
      {
        'label' : 'Thursday',
        'value' : 'Thursday'
      },
      {
        'label' : 'Friday',
        'value' : 'Friday'
      },
      {
        'label': 'Saturday',
        'value': 'Saturday'
      },
      {
        'label' : 'Sunday',
        'value' : 'Sunday'
      },
    ];   
    this.currBeer = "AleSmith IPA";
    this.currDay = "Monday";
    this.barService.getBarAnalytics("AleSmith IPA", "Monday").subscribe(
      data => {
        console.log(data);
        const bar = [];
        const Sold = [];
  
        data.forEach(bars => {
          bar.push(bars.bar);
          Sold.push(bars.Sold);
        });
        this.renderChart(bar, Sold);
      }
      );
  }
  sortBeers(selectedOption: string){
    this.currBeer = selectedOption;
    if (selectedOption === selectedOption){
      this.barService.getBarAnalytics(selectedOption, this.currDay).subscribe(
        data => {
          console.log(data);
          const bar = [];
          const Sold = [];
    
          data.forEach(bars => {
            bar.push(bars.bar);
            Sold.push(bars.Sold);
          });
          this.renderChart(bar, Sold);
        }
        );

    }
  }
  sortBy(selectedOption: string) {
    this.currDay = selectedOption;
    if (selectedOption === selectedOption){
      this.barService.getBarAnalytics(this.currBeer, selectedOption).subscribe(
        data => {
          console.log(data);
          const bar = [];
          const Sold = [];
    
          data.forEach(bars => {
            bar.push(bars.bar);
            Sold.push(bars.Sold);
          });
          this.renderChart(bar, Sold);
        }
        );

    }
  }

  ngOnInit() {
  }
  renderChart(bar: string[], Sold: number[]){
    Highcharts.chart('bargraph', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Top Bars of a Specific Beer'
      },
      xAxis: {
        categories: bar,
        title: {
          text: 'Bar Name'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Amount Sold'
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
        data: Sold
      }]
    });
  }
}
