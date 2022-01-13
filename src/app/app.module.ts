import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import {AppComponent} from './app.component';
import {PostService} from "./shared/services/post.service";
import {AppRoutingModule} from "./app-routing.module";
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthService} from "./shared/services/auth.service";
import {HeaderComponent} from "./modules/forum/components/header/header.component";
import {MaterialModule} from "./shared/material.module";
import {Interceptor} from "./core/interceptors/app.interceptor";
import {TokenStorage} from "./core/storage/token.storage";
import {AuthGuard} from "./shared/services/auth-guard.service";
import {UserService} from "./shared/services/user.service";
import {ForumModule} from "./modules/forum/forum.module";

@NgModule({
  imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      FormsModule,
      MaterialModule,
      CommonModule,
      ReactiveFormsModule,
      ForumModule
  ],
  declarations: [
      AppComponent,
      HeaderComponent
  ],
  providers: [PostService, UserService, AuthService, TokenStorage, {
        provide: HTTP_INTERCEPTORS,
        useClass: Interceptor,
        multi: true
    }, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
