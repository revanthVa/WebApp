import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SqlqueryService {

  constructor(
    public http: HttpClient
  ) { }

  getSQLquery(query: string){
    return this.http.get<any[]>('/api/sqlquery/'+ encodeURIComponent(query));
  }
}
