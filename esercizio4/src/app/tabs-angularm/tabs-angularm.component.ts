import { Component } from '@angular/core';
import {Observable, Observer} from 'rxjs';
import {MatTabsModule} from '@angular/material/tabs';
import {AsyncPipe} from '@angular/common';

export interface ExampleTab {
  label: string;
  content: string;
  content2: string;
  immagineUrl: any
}

@Component({
  selector: 'app-tabs-angularm',
  standalone: true,
  imports: [MatTabsModule, AsyncPipe],
  templateUrl: './tabs-angularm.component.html',
  styleUrl: './tabs-angularm.component.css'
})
export class TabsAngularmComponent {
  asyncTabs: Observable<ExampleTab[]>;

  constructor() {
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'TINTIN', content: 'Tintin è il protagonista, un simpatico e sveglio giovanotto dai capelli rossi con il ciuffo davanti.', content2: "Di Tintin non si conosce nulla, né famiglia né l'età; si sa che è un reporter, anche se non lo vediamo mai al lavoro." , immagineUrl: 'https://cdn001.tintin.com/public/tintin/img/static/tintin/tintin-motobike.png'},
          {label: 'MILOU', content: 'Milù è il piccolo cane bianco di Tintin. Non parla mai, tranne in poche eccezioni. Tuttavia riesce a comunicare con Tintin tramite un legame empatico, in particolare nei primi racconti, e lo salva in varie occasioni.', content2:"Il personaggio di Milù evolve attraverso il corso della serie: nelle prime apparizioni Milù era la fonte di cinismo per compensare il positivismo di Tintin, poi diventa il comic relief della serie.", immagineUrl: 'https://cdn001.tintin.com/public/tintin/img/static/snowy/milou_v3.png'},
          {label: 'HADDOCK', content: 'Il capitano Haddock è un lupo di mare con capelli e barba nera, molto amante degli alcolici e delle imprecazioni fantasiose.', content2:"" , immagineUrl: 'https://cdn001.tintin.com/public/tintin/img/static/captain-haddock/captain-haddock_v2.jpg'},
          {label: 'DUPONT & DUPOND', content: 'Sono due imbranati e baffuti poliziotti, agenti della Sûretè.', content2:"Sono quasi sempre in giacca e bombetta; in alternativa, quando si trovano in Paesi stranieri indossano travestimenti pacchiani" , immagineUrl: 'https://cdn001.tintin.com/public/tintin/img/static/thomson-and-thompson/dupondt.jpg'},
        ]);
      }, 1000);
    });
  }
}
