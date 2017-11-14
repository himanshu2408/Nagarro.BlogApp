import { Injectable, EventEmitter } from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';

const Base_URL = 'http://localhost:3000/';
const header = {
  headers: new Headers({'content-type': 'application/json'})
};

@Injectable()
export class AuthenticationService {
  loggedInUser = null;
  constructor(private http: Http, private router: Router) {
    if (localStorage.getItem('user') != null) {
      this.loggedInUser = localStorage.getItem('user');
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
}
