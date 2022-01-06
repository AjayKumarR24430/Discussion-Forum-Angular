import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Comment} from "../model/comment.model";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

    constructor(private http: HttpClient) {
    }

    saveComment(newComment: Comment) {
        return this.http.post('http://localhost:8080/comments', newComment).subscribe(
            (response: Response) => {
                console.log(response);
            }
        );
    }

    getCommentsWithPostId(id: number) {
        return this.http.get('http://localhost:8080/comments/post/' + id);
    }

    deleteComment(id: number) {
        this.http.delete('http://localhost:8080/comments/' + id).subscribe(
            () => {
                console.log('Deleted comment with id: ' + id);
            }
        )
    }
}