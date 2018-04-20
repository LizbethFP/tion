import { NgModule } from '@angular/core';
import { HouseComponent } from './house.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
 
        HouseComponent

    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    exports: [
      HouseComponent  
    ]
})

export class HouseModule {

}
