import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {Post} from "../../modules/forum/model/post.model";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {


    constructor(private http: HttpClient) {

    }

    getPosts(pageNumber: number) {
        return this.http.get('http://localhost:8080/posts/page/' + pageNumber);
    }

    savePost(newPost: Post, file: File) {
        return this.http.post('http://localhost:8080/posts', newPost).subscribe(
            (response: Response) => {
                console.log("post add");
                console.log(response);
                this.uploadImage(file);
            }
        );
    }

    getPostById(id: number) {
        return this.http.get('http://localhost:8080/posts/' + id);
    }

    private uploadImage(file: File) {
        let formData = new FormData();
        formData.append('file', file);
        const req = this.http.post('http://localhost:8080/posts/upload', formData);

        req.subscribe((data) => {
            console.log(data);
        }, (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
                console.log('An error occured: ', err.error.message);
            }
            else {
                console.log('Backend returned code', err.status, 'body was ', err.error);
            }
        });

    }

    changeRatingPoints(id: number, buttonState: number) {
        console.log("changeRatingPoints: id:" + id + " buttonState: " + buttonState);
        return this.http.put("http://localhost:8080/posts/" + id + "/rate", buttonState).subscribe(
            (response: Response) => {
                console.log(response);
            }
        );
    }

    deletePost(id: number) {
        this.http.delete("http://localhost:8080/posts/" + id).subscribe(
            () => {
                console.log('Deleted post with id: ' + id);
            }
        );
    }

    updatePost(updatedPost: Post, file: File) {
        return this.http.put('http://localhost:8080/posts', updatedPost).subscribe(
            (response: Response) => {
                console.log(response);
                if (file != null) {
                    this.uploadImage(file);
                }
            }
        )
    }

    searchPost(searchData: string) {
        return this.http.get("http://localhost:8080/posts/search?q=" + searchData)
    }
}