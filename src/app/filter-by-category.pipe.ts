import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCategory'
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
    }
    return blogs.filter( blog => blog['categoryId'] === categoryId);
  }

}
