import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { DividerAngularmComponent } from '../divider-angularm/divider-angularm.component';

@Component({
  selector: 'card-angular1',
  standalone: true,
  imports: [MatCardModule, DividerAngularmComponent],
  templateUrl: './card-angularm1.component.html',
  styleUrl: './card-angularm1.component.css'
})
export class CardAngularm1Component {

}
