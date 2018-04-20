import { Component, OnInit } from '@angular/core';
import { HouseService } from './house.service';

@Component({
    selector: 'app-house',
    templateUrl: './house.component.html',
    styleUrls: ['./house.component.css'],
    providers: [
        HouseService
    ]
})

export class HouseComponent implements OnInit {

    data: any = {};
    dataRestaurants: any = {};
    dataEvents: any = {};
    dataBenefit: any = {};

    public title: string;

    constructor(private houseService: HouseService) {
        this.title = 'la home';
    }

    ngOnInit(): void {
        this.renderContact();
        this.renderRestaurants();
        this.renderEvents();
        this.renderBenefit();

    }

    public renderContact(): void {
        this.houseService.getContacts().subscribe(data => {
            console.log('llamada backend', data);
            this.data = data;
        });
    }
    public renderRestaurants(): void {
        this.houseService.getRestaurants().subscribe(data => {
            console.log('llamada backend', data);
            this.dataRestaurants = data;
        });
    }

    public renderEvents(): void {
        this.houseService.getEvents().subscribe(data => {
            console.log('llamada backend', data);
            this.dataEvents = data;
        });
    }
    public renderBenefit(): void {
        this.houseService.getBenefit().subscribe(data => {
            console.log('llamada backend', data);
            this.dataBenefit = data;
        });
    }
}
