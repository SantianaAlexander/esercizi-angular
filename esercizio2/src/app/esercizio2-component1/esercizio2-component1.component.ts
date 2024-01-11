import { Component } from '@angular/core';
import {Esercizio2Component2Component} from '/workspace/esercizi-angular/esercizio2/src/app/esercizio2-component2/esercizio2-component2.component'
import {Esercizio2Component3Component} from '/workspace/esercizi-angular/esercizio2/src/app/esercizio2-component3/esercizio2-component3.component'

@Component({
  selector: 'app-esercizio2-component1',
  standalone: true,
  imports: [Esercizio2Component2Component, Esercizio2Component3Component],
  templateUrl: './esercizio2-component1.component.html',
  styleUrl: './esercizio2-component1.component.css'
})
export class Esercizio2Component1Component {
  nome = 'The Rock Eyebrow Raise'
  descrizione = 'Dwayne Johnson raising his eyebrow accompanied by the Vine Thud'
  nome2 = 'Primitive Sponge'
  descrizione2 = 'Spongebob Squarepants prehistoric ancestors in the animated television series Spongebob Squarepants.'
}
