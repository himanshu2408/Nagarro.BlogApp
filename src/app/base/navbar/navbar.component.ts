import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {AuthenticationService} from '../../authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() categories;
  @Output() filterByCategoryNotify: EventEmitter<Object> = new EventEmitter<Object>();
  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }
  logout() {
    this.auth.logout();
  }
  loggedIn(): Boolean {
    return this.auth.loggedInUser;
  }
  filterByCategories(categoryId) {
    this.filterByCategoryNotify.emit(categoryId);
  }
}
