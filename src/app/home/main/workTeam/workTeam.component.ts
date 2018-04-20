import { Component } from '@angular/core';

@Component({
    selector: 'app-work-team',
    templateUrl: './workTeam.component.html',
    styleUrls: ['./workTeam.component.css']
})

export class WorkTeamComponent {
    public title: string;

    constructor(){
        this.title = 'equipo de trabajo';
    }

}
