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
    return blogs.filter( blog => blog['categoryId'] === categoryId);
  }

}
