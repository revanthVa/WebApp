import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ManfsService, manf, top10Regions, top10RegionsLikes } from '../manfs.service';

declare const Highcharts: any;

@Component({
  selector: 'app-manf-details',
  templateUrl: './manf-details.component.html',
  styleUrls: ['./manf-details.component.css']
})
export class ManfDetailsComponent implements OnInit {

  manfName: string;
  topRegions: top10Regions[];
  topRegionsLikes: top10RegionsLikes[];
  constructor(
    private manfsService: ManfsService,
    private route: ActivatedRoute
  ) {
    route.paramMap.subscribe((paramMap) => {
      this.manfName = paramMap.get('manf');

      this.manfsService.getTop10Regions(this.manfName).subscribe(
        data => {
          console.log(data);
          const citystate = [];
          const sold = [];
      
          data.forEach(manf => {
            citystate.push(manf.city + ", "+ manf.state);
            sold.push(manf.sold);
          });
          this.renderChart(citystate, sold);
        }
      );
      });
      this.manfsService.getTop10RegionsLikes(this.manfName).subscribe(
        data => {
          console.log(data);
          const citystate = [];
          const manfLikes = [];
      
          data.forEach(manf => {
            citystate.push(manf.city + ", "+ manf.state);
            manfLikes.push(manf.manfLikes);
          });
          this.renderChart2(citystate, manfLikes);
        }
      );
    }

  ngOnInit() {
  }

  renderChart(citystate: string[], sold: number[]) {
    Highcharts.chart('bargraph', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Top Sales by Region'
      },
      xAxis: {
        categories: citystate,
        title: {
          text: 'Region'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Beers Sold'
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
        data: sold
      }]
    });
  }

  renderChart2(citystate: string[], manfLikes: number[]) {
    Highcharts.chart('bargraph2', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Regions where ' + this.manfName + "'s"+ ' beers are liked the most'
      },
      xAxis: {
        categories: citystate,
        title: {
          text: 'Region'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Amount of Likes'
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
        data: manfLikes
      }]
    });
  }

}
