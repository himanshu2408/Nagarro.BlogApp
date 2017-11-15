import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {BlogService} from '../../blog.service';

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.css']
})
export class AllBlogsComponent implements OnInit {

  @Input() blogs;
  @Output() notify: EventEmitter<Object> = new EventEmitter<Object>();
  filterByCategoryId: number = null;
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.filterByCategoryNotifier.subscribe((categoryId) => {
      this.filterByCategoryId = categoryId;
      console.log('in all blogs: ' + this.filterByCategoryId);
    });
  }
  selectBlog(blog) {
    this.notify.emit(blog);
  }
  deleteBlog(blog) {
    this.blogService.deleteBlog(blog);
  }
}
