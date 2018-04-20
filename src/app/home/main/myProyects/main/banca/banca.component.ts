import { Component, OnInit } from '@angular/core';
import { BancaService } from './banca.service';

@Component({
    selector: 'app-banca',
    templateUrl: './banca.component.html',
    styleUrls: ['./banca.component.css'],
    providers: [
        BancaService
    ]
})

export class BancaComponent implements OnInit {

    empresaData: any = {};
    public title: string;

    constructor(private bancaService: BancaService){
        this.title = 'yape';
    }

    ngOnInit(): void{
        this.renderEmpresas();
    }

    public renderEmpresas(): void {
        this.bancaService.getEmpresas().subscribe(data => {
            console.log('llamada backend', data);
            this.empresaData = data.proyects[0];
        });
    }

}