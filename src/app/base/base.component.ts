import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  links: {
    home: ["/home"],
    about: ["/about"]
  };
  blogs: Object [];
  categories: Object [];
  selectedBlog = null;
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.loadCategories()
      .subscribe((categories) => {
        this.categories = categories;
        console.log(this.categories);
      });
    this.blogService.loadBlogs()
      .subscribe((blogs) => {
        this.blogs = blogs;
        console.log(this.blogs);
      });
  }
  selectBlog(blog) {
    this.selectedBlog = blog;
    console.log(this.selectedBlog);
  }
}
