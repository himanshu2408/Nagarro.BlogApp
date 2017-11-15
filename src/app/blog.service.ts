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
  filterByCategoryId: number = null;
  select: EventEmitter<Object> = new EventEmitter<Object>();
  filterByCategoryNotifier: EventEmitter<number> = new EventEmitter<number>();
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
  editBlog(blog) {
    blog.authorId = Number(blog.authorId);
    blog.date = (new Date()).toString();
    console.log('blog to be updated: ', blog)
    return this.http.patch(`${Base_URL}blogs/${blog.id}`, blog, header)
      .map(res => res.json())
      .subscribe((updatedBlog) => {
        console.log(updatedBlog);
      });
  }
  deleteBlog(blog) {
    return this.http.delete(`${Base_URL}blogs/${blog.id}`)
      .map(res => res.json())
      .subscribe((deletedBlog => {
        for (let i = 0 ; i < this.blogs.length; i++) {
          if (this.blogs[i]['id'] == blog.id) {
            this.blogs.splice(i, 1);
            break;
          }
        }
      }));
  }
  filterByCategory(categoryId) {
    this.filterByCategoryId = categoryId;
    this.filterByCategoryNotifier.emit(this.filterByCategoryId);
  }
}
