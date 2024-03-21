import { Routes } from '@angular/router';
import { MainPanelComponent } from './components/cms-panel/main-panel/main-panel.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/cms-panel/login/login.component';

export const routes: Routes = [
    { path: 'admin', component: LoginComponent},
    { path: 'admin/cms', component: MainPanelComponent },
    { path: 'home', component: HomeComponent},
    { path:'',redirectTo: 'home', pathMatch: 'full'},
    { path: '**', redirectTo: 'home' }
];