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
  /*blogs: Object [];
  categories: Object [];
  selectedBlog = null;*/
  constructor(protected blogService: BlogService) { }

  ngOnInit() {
    this.blogService.loadCategories()
      .subscribe((categories) => {
        this.blogService.categories = categories;
        console.log(this.blogService.categories);
      });
    this.blogService.loadBlogs()
      .subscribe((blogs) => {
        this.blogService.blogs = blogs;
        console.log(this.blogService.blogs);
      });
  }
  selectBlog(blog) {
    this.blogService.selectBlog(blog);
  }
}
