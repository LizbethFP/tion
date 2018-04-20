import { Routes, RouterModule } from '@angular/router';

import { HomeLeaderComponent } from './homeLeader.component';
import { HouseComponent } from './main/house/house.component';


const ROUTES: Routes = [
    {
        path: 'homeleader', component: HomeLeaderComponent, children: [
            { path: 'house', component: HouseComponent },            
           
            ]},
                                  
        ]

export const HOME_ROUTES = RouterModule.forChild(ROUTES);