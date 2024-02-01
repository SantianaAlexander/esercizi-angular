import { Component } from '@angular/core';
import { Esercizio3Component2Component } from '../esercizio3-component2/esercizio3-component2.component';
import { Esercizio3Component3Component } from '../esercizio3-component3/esercizio3-component3.component';



@Component({
  selector: 'app-esercizio3-component1',
  standalone: true,
  imports: [Esercizio3Component2Component, Esercizio3Component3Component],
  templateUrl: './esercizio3-component1.component.html',
  styleUrl: './esercizio3-component1.component.css'
})
export class Esercizio3Component1Component {
  meme = [
    {
      memename: "Black Cat Zoning Out",
      memed: "Refers to a video of a cat staring at another cat"
    },
    {
      memename: "Surprised Pikachu",
      memed: "Refers to an episode from the Pokémon anime"
    }

  ]
}
