import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Esercizio3Component1Component } from './esercizio3-component1/esercizio3-component1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Esercizio3Component1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'esercizio3';
}
