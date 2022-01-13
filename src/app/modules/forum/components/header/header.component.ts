import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../../../../shared/services/auth.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @ViewChild('f') searchPostForm: NgForm;
    searchData;
    searchDone: boolean = false;


    constructor(public authService: AuthService, private router: Router) {
    }

    ngOnInit() {
    }

    logoutUser() {
        this.authService.logout();
        this.router.navigate(['posts-list']);
    }

    onSearchPost() { 

        this.searchData = this.searchPostForm.value.searchData;
        console.log("Search data: " + this.searchData);
        this.router.navigate(['search-result'], {queryParams: {searchData: this.searchData}});

    }

}