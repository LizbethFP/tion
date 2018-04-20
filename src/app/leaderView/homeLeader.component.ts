import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './homeLeader.component.html',
  
    styleUrls: ['./homeLeader.component.css']
})

export class HomeLeaderComponent  {

    data: any = {};
    public title: string;

    constructor() {
        this.title = 'la home';
    }

    

}
