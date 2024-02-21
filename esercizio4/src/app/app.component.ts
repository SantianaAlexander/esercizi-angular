import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompNavbarComponent } from './comp-navbar/comp-navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CompNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'esercizio4';
}
