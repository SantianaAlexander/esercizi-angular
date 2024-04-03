import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pagina',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './pagina.component.html',
  styleUrl: './pagina.component.css'
})
export class PaginaComponent {
  // VIAGGIO1
  meta: string = "MILANO - PARIGI";
  durata: string = "1h 45";
  compagnia: string = "";
  aeropPart: string = "";
  aeropArr: string = "";
  prezzo: string = "";
}
