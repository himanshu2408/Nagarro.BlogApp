import { Injectable, EventEmitter } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {AuthenticationService} from './authentication.service';

const Base_URL = 'http://localhost:3000/';
const header = {
  headers: new Headers({'content-type': 'application/json'})
};
interface Blog {
  id: number;
  title: string;
  desc: string;
  authorId: number;
  authorName: string;
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
  constructor(private http: Http, private auth: AuthenticationService) { }
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
  markAsFavourite(blogId: number) {
    this.auth.loggedInUser.favourites.push(blogId);
    return this.http.patch(`${Base_URL}users/${this.auth.loggedInUser.id}`, this.auth.loggedInUser,  header)
      .map(res => res.json());
  }
  markAsUnfavourite(blogId: number) {

  }
  filterByCategory(categoryId: number) {
    this.filterByCategoryId = categoryId;
    this.filterByCategoryNotifier.emit(this.filterByCategoryId);
  }
}
