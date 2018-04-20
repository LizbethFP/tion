import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-house',
    templateUrl: './house.component.html',
    styleUrls: ['./house.component.css'],
    
})

export class HouseComponent  {

    data: any = {};
    public title: string;

    constructor() {
        this.title = 'la home';
    }

    

}