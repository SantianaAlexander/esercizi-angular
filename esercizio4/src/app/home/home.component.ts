import { Component, inject } from '@angular/core';
import { DividerAngularmComponent } from '../divider-angularm/divider-angularm.component';
import { CardAngularm1Component } from '../card-angularm1/card-angularm1.component';
import { CardAngularmComponent } from '../card-angularm/card-angularm.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DividerAngularmComponent, CardAngularm1Component, CardAngularmComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
