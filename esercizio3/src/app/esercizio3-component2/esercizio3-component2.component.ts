import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-esercizio3-component2',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './esercizio3-component2.component.html',
  styleUrl: './esercizio3-component2.component.css'
})
export class Esercizio3Component2Component {
  nlike: number = 0;

  function nrandom(min:number, max:number) {
    return Math.random() * (max - min)
  }

  constructor() {
    console.log('Il componente è stato inizializzato')
  }
}
