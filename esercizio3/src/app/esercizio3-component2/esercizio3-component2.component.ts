import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-esercizio3-component2',
  standalone: true,
  imports: [MatProgressBarModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './esercizio3-component2.component.html',
  styleUrl: './esercizio3-component2.component.css'
})
export class Esercizio3Component2Component {

  nlike = 0;
  color = "";


  randomlike() {
    return Math.floor(Math.random() * (100 - 1 + 1) + 0)
  }

  addLike() {
    if (this.nlike < 100) {
       this.nlike = this.nlike + 1
    }
    if (this.nlike < 33) {
      this.color = "primary"
    } else if(this.nlike >= 33 && this.nlike < 66) {
      this.color = "accent"
    } else if (this.nlike > 66) {
      this.color = "warn"
    }

    return this.nlike
    }
    
  
  
  

  constructor() {
    this.randomlike()
    console.log('Il componente è stato inizializzato')
    this.nlike = this.randomlike()
    if (this.nlike < 33) {
      this.color = "primary"
    } else if(this.nlike >= 33 && this.nlike < 66) {
      this.color = "accent"
    } else if (this.nlike > 66) {
      this.color = "warn"
    }
  }
}
