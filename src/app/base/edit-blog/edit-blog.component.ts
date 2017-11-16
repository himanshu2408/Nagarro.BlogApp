import {Component, DoCheck, OnInit, ViewChild} from '@angular/core';
import {BlogService} from '../../blog.service';
import {AuthenticationService} from '../../authentication.service';

interface Blog {
  id: number;
  title: string;
  desc: string;
  authorId: number;
  authorName: string;
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
  emptyBlog: Blog = {
    id: null,
    title: null,
    desc: null,
    authorId: null,
    authorName: null,
    categoryId: null,
    date: null
  };
  blog: Blog = this.emptyBlog;
  @ViewChild('category') category;
  constructor(private blogService: BlogService, private auth: AuthenticationService) {
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
    blog.date = new Date().toDateString();
    if (this.auth.loggedInUser) {
      blog.authorId = this.auth.loggedInUser.id;
      blog.authorName = this.auth.loggedInUser.authorName;
    }
    this.blogService.addBlog(blog);
  }
  editBlog(blog) {
    blog.categoryId = Number(this.category.nativeElement.value);
    blog.date = new Date().toDateString();
    this.blogService.editBlog(blog);
  }
  resetForm() {
    this.blog = this.emptyBlog;
  }
}
