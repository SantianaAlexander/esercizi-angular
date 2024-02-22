import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-divider-angularm',
  standalone: true,
  imports: [MatListModule, MatDividerModule],
  templateUrl: './divider-angularm.component.html',
  styleUrl: './divider-angularm.component.css'
})
export class DividerAngularmComponent {

}
