import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediasService {


  baseUrl = 'https://flatnyeapi.nunyalabprojets.com/api/';

  constructor(private http: HttpClient) {
  }

 getAllMedias(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token 95b804114074565c7cc5bdb2d7dcdcf4c3aae599'
    });
    return this.http.get(`${this.baseUrl}media`, { headers});
  }

  geMediasById(id: number){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token 95b804114074565c7cc5bdb2d7dcdcf4c3aae599'
    });
    return this.http.get(`${this.baseUrl}media/${id}`, { headers});
  }

}
