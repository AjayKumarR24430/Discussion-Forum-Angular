import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import {AppComponent} from './app.component';
import {PostsComponent} from './modules/forum/components/posts/posts.component';
import {HeaderComponent} from './modules/forum/components/header/header.component';
import {PostsListComponent} from './modules/forum/components/posts/posts-list/posts-list.component';
import {PostsAddComponent} from './modules/forum/components/posts/posts-add/posts-add.component';
import {PostService} from "./shared/services/post.service";
import {ShorterContentPipe} from "./modules/forum/components/posts/pipe/shorter-content.pipe";
import {ShorterNamePipe} from "./modules/forum/components/comments/pipe/shorter-name.pipe";
import {CategoriesFormatPipe} from "./shared/pipe/categories-format.pipe";
import {AppRoutingModule} from "./app-routing.module";
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {PostDetailsComponent} from './modules/forum/components/posts/post-details/post-details.component';
import {AuthService} from "./shared/services/auth.service";
import {PostEditComponent} from './modules/forum/components/posts/post-edit/post-edit.component';
import {MaterialModule} from "./shared/material.module";
import {CommentsComponent} from './modules/forum/components/comments/comments.component';
import {CommentAddComponent} from './modules/forum/components/comments/comment-add/comment-add.component';
import {CommentsListComponent} from './modules/forum/components/comments/comments-list/comments-list.component';
import {CommentService} from "./modules/forum/components/comments/services/comment.service";
import {TimeAgoPipe} from "time-ago-pipe";
import {SignupComponent} from './modules/forum/components/auth/signup/signup.component';
import {SigninComponent} from './modules/forum/components/auth/signin/signin.component';
import {Interceptor} from "./core/interceptors/app.interceptor";
import {TokenStorage} from "./core/storage/token.storage";
import {AuthGuard} from "./shared/services/auth-guard.service";
import {UserService} from "./shared/services/user.service";
import {SearchResultComponent} from './modules/forum/components/posts/search-result/search-result.component';


@Pipe({
    name: 'timeAgo',
    pure: false
})
export class TimeAgoExtendsPipe extends TimeAgoPipe {}

@NgModule({
  imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      FormsModule,
      MaterialModule,
      CommonModule,
      ReactiveFormsModule
  ],
  declarations: [
      AppComponent,
      PostsComponent,
      HeaderComponent,
      PostsListComponent,
      PostsAddComponent,
      ShorterContentPipe,
      ShorterNamePipe,
      CategoriesFormatPipe,
      PostDetailsComponent,
      PostEditComponent,
      CommentsComponent,
      CommentAddComponent,
      CommentsListComponent,
      TimeAgoExtendsPipe,
      SignupComponent,
      SigninComponent,
      SearchResultComponent,
  ],
  providers: [PostService, CommentService, UserService, AuthService, TokenStorage, SearchResultComponent, {
        provide: HTTP_INTERCEPTORS,
        useClass: Interceptor,
        multi: true
    }, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
