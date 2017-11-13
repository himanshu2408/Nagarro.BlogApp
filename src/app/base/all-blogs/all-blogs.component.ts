import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.css']
})
export class AllBlogsComponent implements OnInit {

  @Input() blogs;
  @Output() notify: EventEmitter<Object> = new EventEmitter<Object>();
  constructor() { }

  ngOnInit() {
  }
  selectBlog(blog) {
    this.notify.emit(blog);
  }

}
