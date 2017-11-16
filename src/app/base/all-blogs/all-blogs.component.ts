import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {BlogService} from '../../blog.service';
import {AuthenticationService} from '../../authentication.service';

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.css']
})
export class AllBlogsComponent implements OnInit {

  @Input() blogs;
  @Output() notify: EventEmitter<Object> = new EventEmitter<Object>();
  filterByCategoryId: number = null;
  userFavourites: number[];
  constructor(private blogService: BlogService,  private auth: AuthenticationService) {
    if (this.auth.loggedInUser) {
      this.userFavourites = this.auth.loggedInUser.favourites;
    } else {
      this.userFavourites = [];
    }
  }

  ngOnInit() {
    this.blogService.filterByCategoryNotifier.subscribe((categoryId) => {
      this.filterByCategoryId = categoryId;
    });
  }
  selectBlog(blog) {
    this.notify.emit(blog);
  }
  deleteBlog(blog) {
    this.blogService.deleteBlog(blog);
  }
  isLoggedIn(): Boolean {
    return this.auth.isLoggedIn();
  }
  isPostedByUser(blog): Boolean {
    return (blog.authorId == this.auth.loggedInUser.id && blog.authorName == this.auth.loggedInUser.username);
  }
  markAsFavourite(blogId) {
    this.blogService.markAsFavourite(blogId)
      .subscribe((updatedUser) => {
        localStorage.setItem('user', JSON.stringify(updatedUser));
        console.log(updatedUser);
      });
  }
  markAsUnfavourite(blogId) {
    this.blogService.markAsUnfavourite(blogId)
      .subscribe((updatedUser) => {
        localStorage.setItem('user', JSON.stringify(updatedUser));
        console.log(updatedUser);
      });
  }
  isFavourite(blogId) {
    return this.userFavourites.includes(blogId);
  }
}
