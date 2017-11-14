import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {BlogService} from '../../blog.service';

interface Blog {
  id: number;
  title: string;
  desc: string;
  authorId: number;
  categoryId: number;
  date: string;
}

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit, DoCheck {

  categories = null;
  blog: Blog = {
    id: null,
    title: null,
    desc: null,
    authorId: null,
    categoryId: null,
    date: null
  };
  constructor(private blogService: BlogService) {
  }

  ngOnInit() {
    this.blogService.select.subscribe((selectedBlog) => {
      this.blog = selectedBlog;
    });
  }
  ngDoCheck() {
    this.categories = this.blogService.categories;
  }
  save() {
    if (this.blog.id == null) {
      this.addBlog(this.blog);
    }
  }
  addBlog(blog) {
    this.blogService.addBlog(blog);
  }
}
