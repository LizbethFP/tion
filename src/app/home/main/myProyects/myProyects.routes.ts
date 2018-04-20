import { Routes, RouterModule } from '@angular/router';
import { MyProyectsComponent } from './myProyects.component';
import { YapeComponent } from './main/yape/yape.component';
import { BancaComponent } from './main/banca/banca.component';


const ROUTES: Routes = [
    {
        path: 'myProyects', component: MyProyectsComponent, children: [
            { path: 'yape', component: YapeComponent },            
            { path: 'banca', component: BancaComponent },                           
        ]
    },
];

export const MY_PROYECTS_ROUTES = RouterModule.forChild(ROUTES);
