import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Bar {
  addr: string;
  city: string;
  license: string;
  name: string;
  phone: string;
  state: string;
}
export interface topSpenderGraph {
  Drinkersname: string;
  totalprice: number;
}
export interface topBeers{
  Quantity: number;
  beername: string;
}
export interface timeDistribution{
  Hour: string;
  Quantity: number;
}
export interface fractionInventory{
  Dateday: string;
  fraction: number;
}
export interface barAnalytics{
  bar: string;
  Sold: number;
}
export interface beers{
  name: string;
}
@Injectable({
  providedIn: 'root'
})
export class BarsService {

  constructor(
    public http: HttpClient
  ) { }
  getBars() { 
    return this.http.get<Bar[]>('/api/bar');
  }
  getBar(bar: string){
    return this.http.get<Bar>('api/bar/' + bar);
  }
  getTopSpenderGraph(bar: string){
    return this.http.get<topSpenderGraph[]>('api/bar/'+bar+'/top10spenders');
  }
  getTopBeers(bar: string, day: string){
    return this.http.get<topBeers[]>('/api/bar/'+bar+'/'+day+'/top10Beers');
  }
  getTimeDistribution(bar: string, day: string){
    return this.http.get<timeDistribution[]>('/api/bar/'+bar+'/'+day+'/timeDistribution')
  }
  getTimeDistributionWeek(bar: string){
    return this.http.get<timeDistribution[]>('/api/bar/'+bar+'/timeDistributionWeek')
  }
  getInventoryFraction(bar: string){
    return this.http.get<fractionInventory[]>('/api/bar/'+bar+'/fractionInventory')
  }
  getBarAnalytics(beer: string, day: string){
    return this.http.get<barAnalytics[]>('/api/barAnalytics/'+beer+'/'+day)
  }
  getBeersOnly(){
    return this.http.get<beers[]>('/api/beersOnly')
  }
}
