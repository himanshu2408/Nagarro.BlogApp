import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

const Base_URL = 'http://localhost:3000/';
const header = {
  headers: new Headers({'content-type': 'application/json'})
};


@Injectable()
export class BlogService {

  constructor(private http: Http) { }
  loadCategories() {
    return this.http.get(`${Base_URL}categories`)
      .map(res => res.json());
  }
  loadBlogs() {
    return this.http.get(`${Base_URL}blogs`)
      .map(res => res.json());
  }
}
