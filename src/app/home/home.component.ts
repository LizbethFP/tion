import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    providers: [
        HomeService
    ],
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    data: any = {};
    public title: string;

    constructor(private homeService: HomeService) {
        this.title = 'la home';
    }

    ngOnInit(): void {
        this.renderContact();
    }

    public renderContact(): void {
        this.homeService.getContacts().subscribe(data => {
            console.log('llamada backend', data);
            this.data = data;
        });
    }

}
