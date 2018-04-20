import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public name: string;

  constructor(private router: Router) {
    this.name = 'hola mundo'
  }

  // public goLogin() {
  //   this.router.navigate(['/login']);
  // }

}
