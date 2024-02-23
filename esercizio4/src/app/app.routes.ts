import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TintinComponent } from './tintin/tintin.component';
import { SpirouComponent } from './spirou/spirou.component';
import { LuckyLukeComponent } from './lucky-luke/lucky-luke.component';

export const routes: Routes = [
    {
        path:"",
        component: HomeComponent
    },
    {
        path:"Home",
        component: HomeComponent
    },
    {
        path:"Tintin",
        component: TintinComponent
    },
    {
        path:"Spirou",
        component: SpirouComponent
    },
    {
        path:"Luckyluke",
        component: LuckyLukeComponent
    }
];
