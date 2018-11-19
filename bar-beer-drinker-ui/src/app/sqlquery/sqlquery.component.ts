import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { SqlqueryService } from '../sqlquery.service';
@Component({
  selector: 'app-sqlquery',
  templateUrl: './sqlquery.component.html',
  styleUrls: ['./sqlquery.component.css']
})
export class SqlqueryComponent implements OnInit {

  query: string;
  queryResults;
  columns: any[];
  error;
  constructor(
    public sqlQueryService: SqlqueryService
  ) { }

  ngOnInit() {
  }
   isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
  getSQLquery(){
    this.columns = [];
    this.sqlQueryService.getSQLquery(this.query).subscribe(
      data => {
        this.queryResults = data;
      },
      (error: HttpResponse<any>) => {
        if (error.status === 404) {
          alert('Query not found')
        }else {
          console.error(error.status + ' - ' + error.body);
          alert('Invalid query');
          }
      },
      () => {
        for(let row of this.queryResults){
          for(let col in row) {
            this.columns.push(col)
          }
          break;
        }
      }
    );
  }
  
}
