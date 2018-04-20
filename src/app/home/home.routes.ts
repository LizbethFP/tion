import { Routes, RouterModule } from '@angular/router';
import { WorkTeamComponent } from './main/workTeam/workTeam.component';
import { MyProyectsComponent } from './main/myProyects/myProyects.component';
import { HomeComponent } from './home.component';
import { HouseComponent } from './main/house/house.component';
import { DocumentationComponent } from './main/documentation/documentation.component';
import { SettingsComponent } from './main/settings/settings.component';
import { BancaComponent } from './main/myProyects/main/banca/banca.component';
import { YapeComponent } from './main/myProyects/main/yape/yape.component';

const ROUTES: Routes = [
    {
        path: 'home', component: HomeComponent, children: [
            { path: 'house', component: HouseComponent },            
            { path: 'workteam', component: WorkTeamComponent },
            { path: 'myProyects', component: MyProyectsComponent, children: [
                { path: 'yape', component: YapeComponent },            
                { path: 'banca', component: BancaComponent } 
            ]},
            { path: 'documentation', component: DocumentationComponent },   
            { path: 'settings', component: SettingsComponent },                                 
        ]
    },
];

export const HOME_ROUTES = RouterModule.forChild(ROUTES);
