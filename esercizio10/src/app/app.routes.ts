import { Routes } from '@angular/router';
import { MostreComponent } from './mostre/mostre.component';
import { HomeComponent } from './home/home.component';
import { SingolaMostraComponent } from './singola-mostra/singola-mostra.component';

export const routes: Routes = [
    {path: 'Mostre', component: MostreComponent},
    {path: 'Home', component: HomeComponent},
    {path: '', redirectTo: '/Home', pathMatch: 'full'},
    {path: 'Mostre/:id', component: SingolaMostraComponent}
];
