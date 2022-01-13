import {Component, OnInit, ViewChild, NgModule} from '@angular/core';
import {AuthService} from "../../../../../shared/services/auth.service";
import {TokenStorage} from "../../../../../core/storage/token.storage";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../../../../shared/services/user.service";
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
    @ViewChild('f') signinUserForm: NgForm;
    isSendButtonActivated = true;

    constructor(public authService: AuthService, private token: TokenStorage, private router: Router, private userService: UserService) {
    }

    ngOnInit() {
        this.authService.badCredentials = false;
    }

    onLogin(): void {
        const value = this.signinUserForm.value;
        const username = value.username;
        const password = value.password;
        this.signinUserForm.reset();
        this.authService.attemptAuth(username, password).subscribe(
            data => {

                this.token.saveToken(data.token);
                this.userService.getCurrentUser().subscribe(
                    (currentUser: any) => {
                        if (currentUser.roles[0].name === "ADMIN") {
                            this.authService.setAdminMode();
                            console.log("YOU ARE THE ADMIN");
                        }
                        else {
                            this.authService.deactivateAdminMode();
                        }
                    }
                );
                this.isSendButtonActivated = false;
                this.router.navigate(['posts-list']);
            }
        );
    }

}