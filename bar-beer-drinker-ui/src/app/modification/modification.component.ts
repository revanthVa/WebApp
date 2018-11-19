import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModificationService, Result } from '../modification.service';
import { HttpResponse } from '@angular/common/http';
import { BeersService } from '../beers.service';
import { Beer } from '../beers.service';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import { stringify } from '@angular/core/src/render3/util';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.css'],

})
export class ModificationComponent implements OnInit {
  functions: SelectItem[];
  tables: SelectItem[];
  value='';
  result: Result;
  resultMessage = '';
  query='';
  executedQuery='';
  funct='INSERT INTO';
  tbl='Test';
  handleClick() {
     if(this.query == '')
    {
      alert('Specify Parameters');
      //this.clickMessage = 'Please enter a query';
    }
    else
    {
      //this.query="INSERT INTO Test (name, id) VALUES ('"+this.beername+"', '"+this.manfname+"')";
      
      this.executedQuery = this.funct+' '+this.tbl+' '+this.query;
      console.log(this.executedQuery);
       this.modService.sendQuery(this.executedQuery).subscribe(
        data => {
          this.result = data;
          this.resultMessage = this.result.first;
        },
        error => {
          alert('could not process query');
          
        }
      );
    }
    this.executedQuery='';
  } 

  constructor(
      private modService: ModificationService,
      private route: ActivatedRoute) {

        this.functions = [
          {label:'INSERT INTO', value:'INSERT INTO'},
          {label:'UPDATE', value:'UPDATE'},
          {label:'DELETE FROM', value:'DELETE FROM'}
    
      ];
      this.tables = [
        {label:'Test', value:'Test'},
        {label:'Bars', value:'Bars'},        
        {label:'Bartenders', value:'Bartenders'},
        {label:'Beers', value:'Beers'},
        {label:'BillsNew', value:'BillsNew'},
        {label:'Bought', value:'Bought'},
        {label:'Date', value:'Date'},
        {label:'Drinks', value:'Drinks'},
        {label:'Foods', value:'Frequents'},
        {label:'Has', value:'Has'},
        {label:'Hours', value:'Hours'},
        {label:'Items', value:'Items'},
        {label:'Sells', value:'Sells'},
        {label:'Stocked', value:'Stocked'},
        {label:'testFrequents', value:'testFrequents'},
        {label:'Works', value:'Works'}

        
    ];

      }
      

      

  ngOnInit() {
  }

}