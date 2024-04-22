import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import {MatDividerModule} from '@angular/material/divider'
import { Routes } from '@angular/router';
import { MostreComponent } from './mostre/mostre.component';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatDividerModule, HomeComponent, RouterLink, MostreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'esercizio10';
}
