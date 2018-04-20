import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../header/header.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { MyProyectsComponent } from "./main/myProyects/myProyects.component";
import { WorkTeamComponent } from './main/workTeam/workTeam.component';
import { HOME_ROUTES } from './home.routes';
//Module to consume API, example
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HouseComponent } from './main/house/house.component';
import { SettingsComponent } from './main/settings/settings.component';
import { DocumentationComponent } from './main/documentation/documentation.component';
import { HttpClientModule } from '@angular/common/http';
import { YapeComponent } from './main/myProyects/main/yape/yape.component';
import { BancaComponent } from './main/myProyects/main/banca/banca.component';

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        SidenavComponent,
        MyProyectsComponent,
        WorkTeamComponent,
        HouseComponent,
        SettingsComponent,
        DocumentationComponent,
        YapeComponent,
        BancaComponent
    ],
    imports: [
        HOME_ROUTES,
        BrowserModule,
        HttpClientModule
    ],
    exports: [
        HomeComponent  
    ]
})

export class HomeModule {

}
