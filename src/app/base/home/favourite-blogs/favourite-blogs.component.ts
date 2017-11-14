import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-favourite-blogs',
  templateUrl: './favourite-blogs.component.html',
  styleUrls: ['./favourite-blogs.component.css']
})
export class FavouriteBlogsComponent implements OnInit {

  @Input() blogs;
  constructor() { }

  ngOnInit() {
  }

}
