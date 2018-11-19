import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModificationService {

  constructor(
    public http: HttpClient
  ) { }

  getModification(modification: string) {
    return this.http.get<any[]>('/api/modification/' + encodeURIComponent(modification));
  }
}



