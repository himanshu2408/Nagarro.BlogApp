import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    username : null,
    password : null
  };
  constructor(private auth: AuthenticationService,  private router: Router) { }

  ngOnInit() {
    if (this.auth.loggedInUser != null) {
      this.router.navigate(['home']);
    }
  }
  login() {
    /*console.log(this.auth.login(this.user));
    if (this.auth.login(this.user) ==  true) {
      console.log('logged in user ');
      this.router.navigate(['home']);
    }*/
    this.auth.login()
      .subscribe((users) => {
        users.forEach(user => {
          if (user.username == this.user.username && user.password == this.user.password) {
            localStorage.setItem('user', user);
            this.auth.loggedInUser = user;
            this.router.navigate(['home']);
          }
        });
      });
  }
}
