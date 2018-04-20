import { Component, OnInit } from '@angular/core';
import { YapeService } from './yape.service';

@Component({
    selector: 'app-yape',
    templateUrl: './yape.component.html',
    styleUrls: ['./yape.component.css'],
    providers: [
        YapeService
    ]
})

export class YapeComponent implements OnInit {

    empresaData: any = {};
    public title: string;

    constructor(private yapeService: YapeService){
        this.title = 'yape';
    }

    ngOnInit(): void{
        this.renderEmpresas();
    }

    public renderEmpresas(): void {
        this.yapeService.getEmpresas().subscribe(data => {
            console.log('llamada backend', data);
            this.empresaData = data.proyects[1];
        });
    }

}