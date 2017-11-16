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
  userFavourites: number[] = this.auth.loggedInUser.favourites;
  constructor(private blogService: BlogService,  private auth: AuthenticationService) { }

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
      .subscribe((updatedFavourites) => {
        console.log(updatedFavourites);
      });
  }
  markAsUnfavourite(blogId) {

  }
  isFavourite(blogId) {
    return this.userFavourites.includes(blogId);
  }
}
