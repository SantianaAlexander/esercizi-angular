import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, MatDividerModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  viaggi : any[] = [
    {destinazione : "Venere", sistema: "Sistema Solare", durata: "6 mesi",dataP: new Date().getTime() , dataA: new Date().getTime() + (6 * 30 * 24 * 60 * 60 * 1000) ,distanza: 0.004033, spazPart: "Aurora", costo: "300000", img: '../../assets/img/venere.png'},
    {destinazione : "Nettuno", sistema: "Sistema Solare", durata: "30 anni",dataP: new Date().getTime() , dataA: new Date().getTime() + (30 * 365 * 24 * 60 * 60 * 1000) ,distanza: 4.5, spazPart: "Simurgh", costo: "800000", img: '../../assets/img/nettuno.png'},
    {destinazione : "Urano", sistema: "Sistema Solare", durata: "8.5 anni",dataP: new Date().getTime() , dataA: new Date().getTime() + (8.5 * 365 * 24 * 60 * 60 * 1000) ,distanza: 0.0032367, spazPart: "Melliflua", costo: "450000", img: '../../assets/img/urano.png'},
    {destinazione : "Marte", sistema: "Sistema Solare", durata: "7 mesi",dataP: new Date().getTime() , dataA: new Date().getTime() + (7 * 30 * 24 * 60 * 60 * 1000) ,distanza: 0.000024, spazPart: "Borneo", costo: "150000", img: '../../assets/img/marte.png'},
    {destinazione : "Giove", sistema: "Sistema Solare", durata: "8 anni",dataP: new Date().getTime() , dataA: new Date().getTime() + (8 * 365 * 24 * 60 * 60 * 1000) ,distanza: 0.00832, spazPart: "Aurora", costo: "400000", img: '../../assets/img/giove.png'},
    {destinazione : "Mercurio", sistema: "Sistema Solare", durata: "1 anno",dataP: new Date().getTime() , dataA: new Date().getTime() + (1 * 365 * 24 * 60 * 60 * 1000) ,distanza: 0.0000091701, spazPart: "Borgheresi", costo: "200000", img: '../../assets/img/mercurio.png'}
  ]
}
