import { Injectable, EventEmitter } from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';

const Base_URL = 'http://localhost:3000/';
const header = {
  headers: new Headers({'content-type': 'application/json'})
};
interface User {
  id: number;
  username: string;
  password: string;
  favourites: number[];
}
@Injectable()
export class AuthenticationService {
  loggedInUser: User = {
    id: null,
    username: null,
    password: null,
    favourites: null
  };
  constructor(private http: Http, private router: Router) {
    if (localStorage.getItem('user') != null) {
      this.loggedInUser = JSON.parse(localStorage.getItem('user'));
    }
  }
  login() {
    return this.http.get(`${Base_URL}users`)
      .map(res => res.json());
  }
  logout() {
    this.loggedInUser = null;
    localStorage.removeItem('user');
    this.router.navigate(['']);
  }
  isLoggedIn(): Boolean {
    if (this.loggedInUser.id) {
      return true;
    } else {
      return false;
    }
  }
}
