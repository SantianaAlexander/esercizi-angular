import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Divider2AngularmComponent } from '../divider2-angularm/divider2-angularm.component';

@Component({
  selector: 'app-card1-angularm',
  standalone: true,
  imports: [MatCardModule, Divider2AngularmComponent],
  templateUrl: './card1-angularm.component.html',
  styleUrl: './card1-angularm.component.css'
})
export class Card1AngularmComponent {

}
