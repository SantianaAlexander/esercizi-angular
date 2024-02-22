import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompNavbarComponent } from './comp-navbar/comp-navbar.component';
import { CardAngularmComponent } from './card-angularm/card-angularm.component';
import { CardAngularm1Component } from './card-angularm1/card-angularm1.component';
import { DividerAngularmComponent } from './divider-angularm/divider-angularm.component';
import { getLocaleDateFormat } from '@angular/common';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,CompNavbarComponent, CardAngularmComponent, CardAngularm1Component, DividerAngularmComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'esercizio4';
  image: any 
    primaimmagine() {
      this.image = "/workspace/esercizi-angular/esercizio4/src/assets/images/Zonneland.png"
    }
    secondaImmagine() {
      this.image = "/workspace/esercizi-angular/esercizio4/src/assets/images/pdf_1fb50200-16ab-012e-8cac-0050569439b1.jpg"
    }
}
