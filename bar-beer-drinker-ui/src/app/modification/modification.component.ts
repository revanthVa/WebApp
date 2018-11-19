import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ModificationService } from '../modification.service';
@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.css']
})
export class ModificationComponent implements OnInit {
  mod: string;
  modResults;
  columns: any[];
  error;
  constructor(
    public modificationservice: ModificationService
  ) { }

  ngOnInit() {
  }
  getModification(){
    this.columns = [];
    this.modificationservice.getModification(this.mod).subscribe(
      data => {
        this.modResults = data;
      },
      (error: HttpResponse<any>) => {
        if (error.status === 404) {
          alert('Invalidates foreign key')
        }else {
          console.error(error.status + ' - ' + error.body);
          alert('Invalid Modification');
          }
      },
      () => {
        for(let row of this.modResults){
          for(let col in row) {
            this.columns.push(col)
          }
          break;
        }
      }
    );
  }
  
}
