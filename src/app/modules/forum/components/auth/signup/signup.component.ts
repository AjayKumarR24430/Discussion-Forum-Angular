import {Component, OnInit, ViewChild,NgModule} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../../../../shared/services/auth.service";
import {User} from "../../../model/user.model";
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    @ViewChild('f') signupUserForm: NgForm;
    isSendButtonActivated;

    constructor(public authService: AuthService) {
    }

    ngOnInit() {
        this.isSendButtonActivated = true;
        this.authService.loginOrEmailNotAvailable = false;
    }

    onSignup() {
        this.isSendButtonActivated = false;
        const value = this.signupUserForm.value;
        const user = new User(value.username, value.password, value.email, value.firstName, value.lastName, null);
        this.authService.signupUser(user);
        this.isSendButtonActivated = true;
        this.signupUserForm.reset();

    }
}
