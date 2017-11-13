import {Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit, OnChanges {
  ratings: number[]= [1, 2, 3, 4, 5];

  @Input() categories;
  @Input() blog;
  @ViewChild('title') title;
  @ViewChild('desc') desc;
  @ViewChild('author') author;
  @ViewChild('category') category;
  @ViewChild('rating') rating;
  constructor() {
  }

  ngOnInit() {
  }
  ngOnChanges() {
    if (this.blog != null) {
      this.title.nativeElement.value = this.blog.title;
      this.desc.nativeElement.value = this.blog.desc;
      this.author.nativeElement.value = this.blog.author;
      this.rating.nativeElement.value = this.blog.rating;
      console.log(this.rating.nativeElement.options);
      this.rating.nativeElement.options.forEach((item, index) => {
        console.log(item); // 9, 2, 5
        console.log(index);
      });
    }
  }
}
