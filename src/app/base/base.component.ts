import {Component, OnInit} from '@angular/core';
import {BlogService} from '../blog.service';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';

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
  constructor(protected blogService: BlogService, private auth: AuthenticationService, private router: Router) {
    this.blogService.loadCategories()
      .subscribe((categories) => {
        this.blogService.categories = categories;
        console.log(this.blogService.categories);
      });
  }

  ngOnInit() {
    if (localStorage.getItem('user') == null) {
      console.log(localStorage.getItem('user'));
      this.router.navigate(['/']);
    }
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
