import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  baseUrl : string = environment.apiUrl;
  errorMgmt: any;
  constructor(private http: HttpClient) {
  }

 getAllcompte(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token 95b804114074565c7cc5bdb2d7dcdcf4c3aae599'
    });
    return this.http.get(`${this.baseUrl}compte`, { headers});
  }
  getCompteById(id:number){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token 95b804114074565c7cc5bdb2d7dcdcf4c3aae599'
    });
    return this.http.get(`${this.baseUrl}compte/${id}`, { headers});
  }
}
