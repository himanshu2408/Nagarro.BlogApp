import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { NavbarComponent } from './base/navbar/navbar.component';
import { FooterComponent } from './base/footer/footer.component';
import { HomeComponent } from './base/home/home.component';
import { BlogDetailComponent } from './base/blog-detail/blog-detail.component';
import { FavouriteBlogsComponent } from './base/home/favourite-blogs/favourite-blogs.component';
import { EditBlogComponent } from './base/home/edit-blog/edit-blog.component';
import {BlogService} from './blog.service';

import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { NotFoundComponent } from './base/not-found/not-found.component';

const approutes = [
  {path: "", redirectTo: 'home', pathMatch: 'full'},
  {path: "home", component: BaseComponent},
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
    FavouriteBlogsComponent,
    EditBlogComponent,
    NotFoundComponent
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
