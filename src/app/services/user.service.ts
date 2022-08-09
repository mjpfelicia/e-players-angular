import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  salvaedados(UserModel: User) {
    throw new Error('Method not implemented.');
  }

  constructor(
    private httpClient: HttpClient
  ) { }


  url = "http://localhost:3000/signup"

             // post   

  sigin(user: User): Observable<any> {
    return this.httpClient.post(
      this.url,
      JSON.stringify(user),
      {
        headers:new HttpHeaders({'Content-Type': 'application/json'}),
        observe:'response'
      })
  }
}
