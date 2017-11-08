import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {

  @Input() categories;
  constructor() { }

  ngOnInit() {
  }

}
