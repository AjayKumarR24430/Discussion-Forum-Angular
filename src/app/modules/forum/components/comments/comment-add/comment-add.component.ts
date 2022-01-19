import {Component, OnInit, ViewChild, NgModule} from '@angular/core';
import {NgForm} from "@angular/forms";
import {CommentService} from "../services/comment.service";
import {Post} from "../../../model/post.model";
import {PostService} from "../../../../../shared/services/post.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Comment} from "../../../model/comment.model";
import {PostDetailsComponent} from "../../posts/post-details/post-details.component";
import {User} from "../../../model/user.model";
import {UserService} from "../../../../../shared/services/user.service";
import {AuthService} from "../../../../../shared/services/auth.service";

import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

@Component({
    selector: 'app-comment-add',
    templateUrl: './comment-add.component.html',
    styleUrls: ['./comment-add.component.css']
})
export class CommentAddComponent implements OnInit {
    @ViewChild('f') addCommentForm: NgForm;
    post = {} as Post;
    id: number;
    currentUser = {} as User;

    constructor(private commentService: CommentService, private postService: PostService, private userService: UserService, private router: ActivatedRoute,
                private postDetailsComponent: PostDetailsComponent, public authService: AuthService) {
    }

    ngOnInit() {
        if (this.authService.isAuthenticated()) {
            this.userService.getCurrentUser().subscribe(
                (data: User) => {
                    this.currentUser = data;
                    console.log(this.currentUser);
                },
                (error) => console.log(error)
            );
        }
    }

    onAddComment() {
        const value = this.addCommentForm.value;
        const newComment = new Comment(value.content, this.currentUser, this.postDetailsComponent.post);
        console.log(this.postDetailsComponent.post);
        this.commentService.saveComment(newComment);
        this.addCommentForm.reset();
        window.location.reload();
    }

}