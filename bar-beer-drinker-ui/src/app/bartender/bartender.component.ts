import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { SelectItem } from 'primeng/components/common/selectitem';
import { ActivatedRoute } from '@angular/router';
import { BarsService, Bar } from '../bars.service';
import { BartendersService, Bartender } from '../bartenders.service';

declare const Highcharts: any;

@Component({
  selector: 'app-bartender',
  templateUrl: './bartender.component.html',
  styleUrls: ['./bartender.component.css']
})
export class BartenderComponent implements OnInit {

  bars: Bar[];
  bartendersfrombars: Bartender[];
  selectBars: SelectItem[];
  selectBartenders: SelectItem[];
  currBar: string;
  currBartender: string;
  bartenderShift: Bartender[];
  currDateday: string;
  currstart: string;
  currend: string;
  constructor(
    private barService: BarsService,
    private bartenderService: BartendersService,
    private route: ActivatedRoute
  ) {
    
    barService.getBars().subscribe(
      data => {
        this.selectBars = data.map(Bar => {
          return {
          label: Bar.name,
          value: Bar.name,
          };
        });
        this.bars = data;
      }
    );
    bartenderService.getBartendersFromBars("sfdf").subscribe(
      data => {
        this.selectBartenders = data.map(Bartender => {
          return {
          label: Bartender.Bartendersname,
          value: Bartender.Bartendersname,
          };
        });
        this.bartendersfrombars = data;
      }
      );
      this.bartenderService.getBartenderSales("33 Taps", "Meilani Wells").subscribe(
        data => {
          console.log(data);
          const Itemsname = [];
          const Sold = [];
    
          data.forEach(bars => {
            Itemsname.push(bars.Itemsname);
            Sold.push(bars.Sold);
          });
          
        }
        );
        this.currDateday = '';
        this.bartenderService.getBartenderShift(this.currBartender).subscribe(
          data => {
            this.bartenderShift = data;
          }
      )
  }
  sortBars(selectedOption: string){
    this.currBar = selectedOption;
    if(selectedOption === selectedOption){
      this.bartenderService.getBartendersFromBars(this.currBar).subscribe(
        data => {
          this.selectBartenders = data.map(Bartender => {
            return{
              label: Bartender.Bartendersname,
              value: Bartender.Bartendersname,
            };
          });
        }
        );
        this.bartenderService.getBartenderSales(selectedOption, this.currBartender).subscribe(
          data => {
            console.log(data);
            const Itemsname = [];
            const Sold = [];
      
            data.forEach(bars => {
              Itemsname.push(bars.Itemsname);
              Sold.push(bars.Sold);
            });
            this.renderChart(Itemsname, Sold);
          }
          );
    }
  }

  sortBartenders(selectedOption: string) {
    this.currBartender = selectedOption;
    if (selectedOption === selectedOption){
      this.bartenderService.getBartenderSales(this.currBar, selectedOption).subscribe(
        data => {
          console.log(data);
          const Itemsname = [];
          const Sold = [];
    
          data.forEach(bars => {
            Itemsname.push(bars.Itemsname);
            Sold.push(bars.Sold);
          });
          this.renderChart(Itemsname, Sold);
        }
        );
        this.bartenderService.getBartenderShift(this.currBartender).subscribe(
          data => {
            this.bartenderShift = data;
          }
        )
    }
  }
  ngOnInit() {
  }

  renderChart(Itemsname: string[], Sold: number[]){
    Highcharts.chart('bargraph', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Bartender Sales of Different Beers'
      },
      xAxis: {
        categories: Itemsname,
        title: {
          text: 'Beer Name'
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