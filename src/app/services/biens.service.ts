import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Biens } from '../models/biens';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BiensService {

  baseUrl: string = environment.apiUrl;
  errorMgmt: any;

  headersOption: any = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Token 1edf79927e04a1d016a303aae85a2571dd0abe65`
  });
// ${/*localStorage.getItem('currentUser')*/}
  constructor(private http: HttpClient) {
    console.log('localStorage.getItem(', localStorage.getItem('currentUser'));

  }

  getAllBien() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token 95b804114074565c7cc5bdb2d7dcdcf4c3aae599'
    });
    return this.http.get(`${this.baseUrl}bien`, { headers });
  }

  

  AddBiens(data: Biens): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token 1edf79927e04a1d016a303aae85a2571dd0abe65'
    });
    //console.log('biens service:', data);
    return this.http.post(`${this.baseUrl}bien/`, data, { headers });
    // .pipe(
    //   catchError(this.errorMgmt)
    // );
  }

  public getBienById(id: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token 1edf79927e04a1d016a303aae85a2571dd0abe65'
    });
    return this.http.get(`${this.baseUrl}bien/${id}`, { headers });
  }

  saveBiens(bien: Biens) {
    //console.log('Donnée en paramétre', bien);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token 1edf79927e04a1d016a303aae85a2571dd0abe65'
    });
    return new Promise(
      (resolve, reject) => {
        const promise = this.http.post(`${this.baseUrl}bien`, bien, { headers }).toPromise();
        promise.then(
          (data: Biens) => {
            console.log('Donnée service', data);
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createBien(bien: Biens) {

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json').set('Authorization', 'Token 1edf79927e04a1d016a303aae85a2571dd0abe65');

    const body = JSON.stringify({
      titre: "titre",
      ville: "ville",
      coordonnee: "coordonnee",
      quartier: "coordonnee",
      dimension: "58",
      description: "coordonnee",
      prix: "14",
      type: "T",
      categorie: "L",
      agence: "coordonnee",
      etat: null,
      estvalide: true
    });




    return new Promise(
      (resolve, reject) => {
        const promise = this.http.post(`${this.baseUrl}bien`, bien, { headers }).toPromise();
        promise.then(
          (data) => {
            console.log('Donnée service', data);
            resolve(data);
          },
          (error) => {
            console.log('Donnée service', error);
            reject(error);
          }
        );
      }
    );
  }


}
