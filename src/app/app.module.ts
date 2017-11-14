import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { NavbarComponent } from './base/navbar/navbar.component';
import { FooterComponent } from './base/footer/footer.component';
import { HomeComponent } from './base/home/home.component';
import { BlogDetailComponent } from './base/blog-detail/blog-detail.component';
import { AllBlogsComponent } from './base/all-blogs/all-blogs.component';
import { EditBlogComponent } from './base/edit-blog/edit-blog.component';
import {BlogService} from './blog.service';

import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { NotFoundComponent } from './base/not-found/not-found.component';
import { LoginComponent } from './base/login/login.component';
import { SearchPipe } from './search.pipe';

const approutes = [
  {path: '', component: BaseComponent, children: [
    { path: '', component: LoginComponent }
  ]},
  {path: "home", component: BaseComponent, children: [
    { path: '', component:  EditBlogComponent}
  ]},
  {path: "about", component: BaseComponent},
  {path: "**", component: NotFoundComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    BlogDetailComponent,
    AllBlogsComponent,
    EditBlogComponent,
    NotFoundComponent,
    LoginComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
