import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {PostsComponent} from './components/posts/posts.component';
import {PostsListComponent} from './components/posts/posts-list/posts-list.component';
import {PostsAddComponent} from './components/posts/posts-add/posts-add.component';
import {ShorterContentPipe} from "./components/posts/pipe/shorter-content.pipe";
import {ShorterNamePipe} from "./components/comments/pipe/shorter-name.pipe";
import {PostDetailsComponent} from './components/posts/post-details/post-details.component';
import {PostEditComponent} from './components/posts/post-edit/post-edit.component';
import {CommentsComponent} from './components/comments/comments.component';
import {CommentAddComponent} from './components/comments/comment-add/comment-add.component';
import {CommentsListComponent} from './components/comments/comments-list/comments-list.component';
import {CommentService} from "./components/comments/services/comment.service";
import {SignupComponent} from './components/auth/signup/signup.component';
import {SigninComponent} from './components/auth/signin/signin.component';
import {SearchResultComponent} from './components/posts/search-result/search-result.component';
import {TimeAgoPipe} from "time-ago-pipe";
import {CategoriesFormatPipe} from "../../shared/pipe/categories-format.pipe";


@Pipe({
    name: 'timeAgo',
    pure: false
})
export class TimeAgoExtendsPipe extends TimeAgoPipe {}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
  	  PostsComponent,
	  PostsListComponent,
	  PostsAddComponent,
	  ShorterContentPipe,
	  ShorterNamePipe,
	  PostDetailsComponent,
      PostEditComponent,
      CommentsComponent,
      CommentAddComponent,
      CommentsListComponent,
      SignupComponent,
      SigninComponent,
      SearchResultComponent,
      CategoriesFormatPipe,
      TimeAgoExtendsPipe
  ],
  providers: [ CommentService, SearchResultComponent
    
  ]
})
export class ForumModule{}