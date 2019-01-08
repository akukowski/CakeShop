import { CakeDeleteModel } from './../models/CakeDeleteModel';
import { Injectable } from '@angular/core';

//RXJS
import { Observable } from 'rxjs';

//Model
import { CakeModel } from '../models/CakeModel';

//Http
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CakeService {

  private host = "http://localhost:3000/api/cakes";

  constructor(private _http: HttpClient) { }

  //Pobierz wszystkie ciasta
  getCakes(): Observable<CakeModel[]> {

    return this._http.get<CakeModel[]>(this.host);

  }

  // Pobierz ciasto
  getCake(id: number): Observable<CakeModel> {
  
    return this._http.get<CakeModel>(this.host + `/${id}`);
  
  }

  // Dpdaj ciasto
  addCake(cake: CakeModel): Observable<CakeModel> {

    return this._http.post<CakeModel>(this.host, cake);

  }

  //Edytuj ciasto
  updateCake(id: number, cake: CakeModel): Observable<CakeModel> {

    return this._http.put<CakeModel>(this.host + `/${id}`, cake);

  }

  //Usuń ciasto
  deleteCake(id: number): Observable<CakeDeleteModel> {

    return this._http.delete<CakeDeleteModel>(this.host + `/${id}`);

  }

}
