import { Component } from '@angular/core';
import {SantianaComp3Component} from '/workspace/esercizi-angular/santiana/src/app/santiana-comp3/santiana-comp3.component';

@Component({
  selector: 'app-santiana-comp2',
  standalone: true,
  imports: [SantianaComp3Component],
  templateUrl: './santiana-comp2.component.html',
  styleUrl: './santiana-comp2.component.css'
})
export class SantianaComp2Component {
    span3 = "terzo"
}
