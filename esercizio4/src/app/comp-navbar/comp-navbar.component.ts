import { Component, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-comp-navbar',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './comp-navbar.component.html',
  styleUrl: './comp-navbar.component.css'
})
export class CompNavbarComponent {
}
