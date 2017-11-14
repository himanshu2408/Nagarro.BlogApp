import {Component, DoCheck, Input, OnInit, ViewChild} from '@angular/core';
import {BlogService} from '../../blog.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit, DoCheck {
  ratings: number[]= [1, 2, 3, 4, 5];

  @Input() categories;
  blog;
  @ViewChild('title') title;
  @ViewChild('desc') desc;
  @ViewChild('author') author;
  @ViewChild('category') category;
  @ViewChild('rating') rating;
  constructor(private blogService: BlogService) {
  }

  ngOnInit() {
    this.blogService.select.subscribe((selectedBlog) => {
      this.blog = selectedBlog;
    });
  }
  ngDoCheck() {
    //console.log(this.blog);
    if (this.blog != null) {
      this.title.nativeElement.value = this.blog.title;
      this.desc.nativeElement.value = this.blog.desc;
      this.author.nativeElement.value = this.blog.author;
      this.rating.nativeElement.value = this.blog.rating;
      console.log(this.rating.nativeElement.options);
      /*this.rating.nativeElement.options.forEach((item, index) => {
        console.log(item); // 9, 2, 5
        console.log(index);
      }); */
    }
  }
}
