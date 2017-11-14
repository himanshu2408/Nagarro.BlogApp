import { Injectable, EventEmitter } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

const Base_URL = 'http://localhost:3000/';
const header = {
  headers: new Headers({'content-type': 'application/json'})
};
interface Blog {
  id: number;
  title: string;
  desc: string;
  authorId: number;
  categoryId: number;
  date: string;
}

@Injectable()
export class BlogService {
  blogs: Object [];
  categories: Object [];
  selectedBlog: Blog;
  select: EventEmitter<Object> = new EventEmitter<Object>();
  constructor(private http: Http) { }
  loadCategories() {
    return this.http.get(`${Base_URL}categories`)
      .map(res => res.json());
  }
  loadBlogs() {
    return this.http.get(`${Base_URL}blogs`)
      .map(res => res.json());
  }
  selectBlog(blog) {
    this.selectedBlog = blog;
    this.select.emit(this.selectedBlog);
  }
  addBlog(blog) {
    return this.http.post(`${Base_URL}blogs`, blog, header)
      .map(res => res.json())
      .subscribe((newBlog) => {
        this.blogs.push(newBlog);
      });
  }
}
