import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServices } from './login.services';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [LoginServices]
})
export class LoginComponent {
    public title: string;
    public email: string;
    public password: string;

    constructor(private router: Router, private loginServices: LoginServices) {
        this.title = 'login';
        this.email = '';
        this.password = '';       
    }

    public logIn() {        
        this.loginServices.signIn(this.email, this.password).subscribe((user) => {
            if (user.body.usuario.name) {
                this.validateProfile(user.body.usuario);
            } else {
                this.router.navigate(['/login']);
                console.log('usuario no registrado');
            }
        });
    }

    public validateProfile(user:any): void{
        if(user.profile === 'colaborador') {
            this.router.navigate(['/home/house']);
        } else {
            this.router.navigate(['/homeleader/house']);
        }   
    } 
}
