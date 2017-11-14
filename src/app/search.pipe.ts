import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(blogs: Object[], searchText?: string): any {
    if (!blogs) {
      return [];
    }
    if (!searchText) {
      return blogs;
    }
    searchText = searchText.toLowerCase();
    return blogs.filter( blog => {
      if (blog['title']) {
        return blog['title'].toLowerCase().includes(searchText);
      }
      return blogs;
    });
  }

}
