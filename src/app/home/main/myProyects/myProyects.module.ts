import { NgModule } from '@angular/core';
import { MyProyectsComponent } from "./myProyects.component";
//Module to consume API, example
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { YapeComponent } from './main/yape/yape.component';
import { BancaComponent } from './main/banca/banca.component';
//import { MY_PROYECTS_ROUTES } from './myProyects.routes';


@NgModule({
    declarations: [
        MyProyectsComponent,
        YapeComponent,
        BancaComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    exports: [
      MyProyectsComponent,
      YapeComponent,
      BancaComponent
    ]
})

export class MyProyectsModule {

}
