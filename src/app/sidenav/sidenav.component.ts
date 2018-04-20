import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
    public title: string;

    constructor(private router: Router){
        this.title = 'la home';
    }

    tabActive(e){
       document.getElementsByClassName("tag")[0].classList.add('d-block');
       document.getElementsByClassName("tag")[1].classList.add('d-none');
       document.getElementsByClassName("tag")[2].classList.add('d-none');
       document.getElementsByClassName("tag")[0].classList.remove('d-none');
       document.getElementsByClassName("tag")[1].classList.remove('d-block');
       document.getElementsByClassName("tag")[2].classList.remove('d-block');
    }
    tabActive1(e){
        document.getElementsByClassName("tag")[0].classList.add('d-none');
        document.getElementsByClassName("tag")[1].classList.add('d-block');
        document.getElementsByClassName("tag")[2].classList.add('d-none');
        document.getElementsByClassName("tag")[0].classList.remove('d-block');
        document.getElementsByClassName("tag")[1].classList.remove('d-none');
        document.getElementsByClassName("tag")[2].classList.remove('d-block');
     }
     tabActive2(e){
        document.getElementsByClassName("tag")[0].classList.add('d-none');
        document.getElementsByClassName("tag")[1].classList.add('d-none');
        document.getElementsByClassName("tag")[2].classList.add('d-block');
        document.getElementsByClassName("tag")[0].classList.remove('d-block');
        document.getElementsByClassName("tag")[1].classList.remove('d-block');
        document.getElementsByClassName("tag")[2].classList.remove('d-none');
     }

}
