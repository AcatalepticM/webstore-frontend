import {Injectable} from '@angular/core';
import {User} from '../webstore/models/users.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  public login(user: User) {

    localStorage.setItem('ACCESS_TOKEN', 'access_token');

  }


  public isLoggedIn() {

    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }


  public logout() {

    localStorage.removeItem('ACCESS_TOKEN');

  }
}
