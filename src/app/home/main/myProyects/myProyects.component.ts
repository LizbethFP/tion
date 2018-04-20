import { Component, OnInit } from '@angular/core';
import { MyProyectsService } from './myProyects.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-my-proyects',
    templateUrl: './myProyects.component.html',
    styleUrls: ['./myProyects.component.css'],
    providers: [
        MyProyectsService
    ]
})

export class MyProyectsComponent implements OnInit {

    data: any = {};
    public title: string;

    constructor(private myProyectsService: MyProyectsService, private router : Router) {
        this.title = 'proyectos';
    }

    ngOnInit(): void {
    }


    goYape() {
        this.router.navigate(['/home/myProyects/yape']);        
    }

    goBanca() {
        this.router.navigate(['/home/myProyects/banca']);        
    }
}