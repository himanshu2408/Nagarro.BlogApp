import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCategory',
  pure: false
})
export class FilterByCategoryPipe implements PipeTransform {

  transform(blogs: Object[], categoryId?: number): any {
    if (!blogs) {
      return [];
    }
    if (!categoryId) {
      return blogs;
    }
    if (categoryId === -1) {
      return blogs.filter(blog => blog['authorName'] == JSON.parse(localStorage.getItem('user')).username);
    }     // my blogs
    if (categoryId === -2) {
      return blogs.filter(blog => JSON.parse(localStorage.getItem('user')).favourites.includes(blog['id']));
    }     // favourite blogs
    return blogs.filter( blog => blog['categoryId'] === categoryId);
  }

}
