import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompNavbarComponent } from './comp-navbar/comp-navbar.component';
import { CardAngularmComponent } from './card-angularm/card-angularm.component';
import { CardAngularm1Component } from './card-angularm1/card-angularm1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CompNavbarComponent, CardAngularmComponent, CardAngularm1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'esercizio4';
}
