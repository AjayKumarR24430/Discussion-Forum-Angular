import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CommentService} from "../../service/comment.service";
import {UserService} from "../../service/user.service";
import {PostDetailsComponent} from "../../posts/post-details/post-details.component";
import {AuthService} from "../../auth/auth.service";
import {Comment} from "../../model/comment.model";


@Component({
    selector: 'app-comments-list',
    templateUrl: './comments-list.component.html',
    styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {
    comments: Comment[] = [];
    currUsername: string;
    commentDelete: boolean;

    constructor(public commentService: CommentService, private router: Router, public postDetailsComponent: PostDetailsComponent,
                public authService: AuthService, private userService: UserService) {
    }

    ngOnInit() {
        console.log('id of actual post: ' + this.postDetailsComponent.id);   

        return this.commentService.getCommentsWithPostId(this.postDetailsComponent.id)
            .subscribe(
                (comments: any[]) => {
                    this.comments = comments;
                    console.log(this.comments); 
                    this.userService.getCurrentUser().subscribe(
                      (currentUser: any) => {
                        this.currUsername = currentUser.username;           
                      }
                    );          
                },
                (error) => console.log(error)
            );
    }

    onDeleteComment(id: number) {
        this.commentService.deleteComment(id);
        this.commentDelete = true;
        window.location.reload();
    }


}