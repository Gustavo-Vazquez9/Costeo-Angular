import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CosteoService {
  private apiUrl: string = 'http://localhost:3000/ingredientes';
  /* get httpParams () {
    return new HttpParams().set('fields','name,capital,alpha2Code,flag,population');
  } */

  constructor(private http: HttpClient) {}

  buscarIngrediente(termino: string): Observable <any> {
    const url=`${this.apiUrl}?name=${termino}`;
    console.log(`${this.apiUrl}?name=${termino}`);
    return this.http.get<any>(url);
  }

  mostrarIngrediente(): Observable <any> {
    const url=`${this.apiUrl}`;
    return this.http.get<any>(url);
  }
}
