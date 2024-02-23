import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompNavbarComponent } from './comp-navbar/comp-navbar.component';
import { CardAngularmComponent } from './card-angularm/card-angularm.component';
import { CardAngularm1Component } from './card-angularm1/card-angularm1.component';
import { DividerAngularmComponent } from './divider-angularm/divider-angularm.component';
import { getLocaleDateFormat } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,CompNavbarComponent, CardAngularmComponent, CardAngularm1Component, DividerAngularmComponent, FooterComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'esercizio4';
}
