import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Beer {
  name: string;
  manf: string;
}
export interface top10Bars{
  Barsname: string;
  BeersSold: number;
}
export interface top10Drinkers{
  Drinkersname: string;
  amountBought: number;
}
export interface timeDistribution{
  Hour: number;
  Quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  constructor(
    public http: HttpClient
  ) { }
  getBeers() { 
    return this.http.get<Beer[]>('/api/beer');
  }
  getBeer(beer: string){
    return this.http.get<Beer>('api/beer/' + beer);
  }
  getTop10Bars(beer: string){
    return this.http.get<top10Bars[]>('api/beer/'+beer+'/top10Bars');
  }
  getTop10Drinkers(beer: string){
    return this.http.get<top10Drinkers[]>('api/beer/'+beer+'/top10Drinkers');
  }
  getTimeDistribution(beer: string){
    return this.http.get<timeDistribution[]>('api/beer/'+beer+'/timeDistribution');
  }
}
