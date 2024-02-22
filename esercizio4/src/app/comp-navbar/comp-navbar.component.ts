import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-comp-navbar',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './comp-navbar.component.html',
  styleUrl: './comp-navbar.component.css'
})
export class CompNavbarComponent {

}
