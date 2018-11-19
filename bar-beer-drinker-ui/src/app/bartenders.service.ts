import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Bartender {
  Bartendersname: string;
  Dateday: string;
  start: string;
  end: string;
}
export interface BartendersHours{
  start: string;
  end: string;
}
export interface BartendersAnalytics{
  Bartendersname: string;
  sold: number;
}
export interface BartenderSales{
  Itemsname: string;
  Sold: number;
}

@Injectable({
  providedIn: 'root'
})
export class BartendersService {

  constructor(
    public http: HttpClient
  ) { }

  getBartendersFromBars(name: string) {
    return this.http.get<Bartender[]>('/api/bartender/'+ name);
    }
  getBartendersHours(name: string){
    return this.http.get<BartendersHours[]>('/api/bartendersHours/' + name);
  }
  getBartendersAnalytics(name: string, start: string, end: string){
    return this.http.get<BartendersAnalytics[]>('/api/bartenderAnalytics/'+name+'/'+start+'/'+end)
  }
  getBartenderSales(name: string, bartender: string){
    return this.http.get<BartenderSales[]>('api/bartender/'+name+'/'+bartender+'/BartenderSales')
  }
  getBartenderShift(name: string){
    return this.http.get<Bartender[]>('api/bartendershift/'+ name);
  }
}