import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface manf {
  manf: string;
}
export interface top10Regions{
  city: string;
  state: string;
  sold: number;
}
export interface top10RegionsLikes{
  city: string;
  state: string;
  manfLikes: number;
}
@Injectable({
  providedIn: 'root'
})
export class ManfsService {

  constructor(
    public http: HttpClient
  ) { }

  getManfs() {
    return this.http.get<manf[]>('/api/manf');
  }
  getTop10Regions(manf: string){
    return this.http.get<top10Regions[]>('/api/manf/'+manf+'/top10Regions');
  }
  getTop10RegionsLikes(manf: string){
    return this.http.get<top10RegionsLikes[]>('api/manf/'+manf+'/top10RegionsLikes')
  }
}