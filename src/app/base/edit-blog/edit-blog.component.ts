import {Component, DoCheck, OnInit, ViewChild} from '@angular/core';
import {BlogService} from '../../blog.service';
import {el} from "@angular/platform-browser/testing/src/browser_util";

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
  @ViewChild('category') category;
  constructor(private blogService: BlogService) {
  }

  ngOnInit() {
    this.blogService.select.subscribe((selectedBlog) => {
      this.blog = selectedBlog;
      this.category.nativeElement.value = this.blog.categoryId;
      console.log('cat val: ', this.category.nativeElement.value);
    });
  }
  ngDoCheck() {
    this.categories = this.blogService.categories;
  }
  save() {
    if (this.blog.id == null) {
      this.addBlog(this.blog);
    }else {
      this.editBlog(this.blog);
    }
  }
  addBlog(blog) {
    blog.categoryId = Number(this.category.nativeElement.value);
    this.blogService.addBlog(blog);
  }
  editBlog(blog) {
    blog.categoryId = Number(this.category.nativeElement.value);
    this.blogService.editBlog(blog);
  }
}
