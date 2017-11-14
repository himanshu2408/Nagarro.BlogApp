import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-favourite-blogs',
  templateUrl: './favourite-blogs.component.html',
  styleUrls: ['./favourite-blogs.component.css']
})
export class FavouriteBlogsComponent implements OnInit {

  @Input() blogs;
  @Output() notify: EventEmitter<Object> = new EventEmitter<Object>();
  constructor() { }

  ngOnInit() {
  }
  selectBlog(blog) {
    this.notify.emit(blog);
  }

}
