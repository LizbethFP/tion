import { NgModule } from '@angular/core';
import { HomeLeaderComponent } from './homeLeader.component';
import { HeaderComponent } from '../header/header.component';
import { HOME_ROUTES } from './homeLeader.routes';

//Module to consume API, example
import { BrowserModule } from '@angular/platform-browser';
import { HouseComponent } from './main/house/house.component';

import { SidenavLeaderComponent } from '../sidenavLeader/sidenavLeader.component';
import { HouseModule } from './main/house/house.module';
import { HomeModule } from '../sidenavLeader/sidenavLeader.module';



@NgModule({
    declarations: [
        HomeLeaderComponent,
        // HeaderComponent,
//SidenavLeaderComponent,
        
        //HouseComponent,
       
    ],
    imports: [
        HOME_ROUTES,
        HouseModule,
        HomeModule
    ],
    exports: [
        HomeLeaderComponent  
    ]
})

export class HomeLeaderModule {

}
