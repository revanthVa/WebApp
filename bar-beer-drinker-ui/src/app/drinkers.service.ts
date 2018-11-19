import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Drinker {
  addr: string;
  city: string;
  name: string;
  phone: string;
  state: string;
}

export interface TopBeers {
  beername: string;
  quantity: number;
}

export interface Spending {
  Barsname: string;
  Drinkersname: string;
  dayd: string;
  timet: string;
  tip: number;
  totalprice: number;
  transactionID: string;
}

export interface Transacts {
  Barsname: string;
  BillstransactionID: string;
  Drinkersname: string;
  timet: string;
}

export interface Beer {
  name: string;
  manf: string;
}

@Injectable({
  providedIn: 'root'
})
export class DrinkersService {

  constructor(
    public http: HttpClient
  ) { }
  getDrinkers() {
    return this.http.get<Drinker[]>('/api/drinker');
  }
  getDrinker(drinker: string){
    return this.http.get<Drinker>('api/drinker/' + drinker);
  }

  getTopBeers(drinker: string){
    return this.http.get<TopBeers[]>('api/drinker/'+drinker+'/topbeers');
  }
  getSpending(drinker: string, time: string){
    return this.http.get<Spending[]>('api/drinker/'+drinker+'/spend/'+time);
  }

  getTransacts(drinker: string){
    return this.http.get<Transacts[]>('/api/drinker/'+drinker+'/transacts');
  }
}