import { Component, OnInit } from '@angular/core';
import { manf, ManfsService } from '../manfs.service';
@Component({
  selector: 'app-manf-list',
  templateUrl: './manf-list.component.html',
  styleUrls: ['./manf-list.component.css']
})
export class ManfListComponent implements OnInit {

  manfs: manf[];

  constructor(
    public manfService: ManfsService
  ) { 
  }

  ngOnInit() {
    this.getManfs();
  }
  getManfs() {
    this.manfService.getManfs().subscribe(
      data => {
        this.manfs = data;
      },
      error => {
        alert('Could not retrieve a list of manf');
      }
    )
  }

}
