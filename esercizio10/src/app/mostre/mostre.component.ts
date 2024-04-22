import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mostre',
  standalone: true,
  imports: [ActivatedRoute],
  templateUrl: './mostre.component.html',
  styleUrl: './mostre.component.css'
})
export class MostreComponent {

  identificatore: any;

  constructor(private route: ActivatedRoute){
 
  }
 
  ngOnInit(){
 
    this.identificatore = this.route.snapshot.paramMap.get('id');
 
  }

  mostre: any = [
    {nomeMostra:"Il rinascimento: I capolavori di Buonarroti", nomeArtista: "Michelangelo Buonarroti", imgLogo:"../../assets/img/logoArte.png", descrizione:"Michelangelo, artista poliedrico e indiscusso protagonista del Rinascimento italiano, viene celebrato in questa mostra che esplora la sua vasta produzione artistica. Scopriremo il suo genio creativo che si è espresso in maniera magistrale nella scultura, nella pittura e nell'architettura.", dataInizio: new Date().getTime() + (2 * 30 * 24 * 60 * 60 * 1000), dataFine: new Date().getTime() + (3 * 30 * 24 * 60 * 60 * 1000)},
    {nomeMostra:"Caravaggio - Il Maestro dell'Ombra e della Luce", nomeArtista: "Caravaggio", imgLogo:"../../assets/img/logoArte.png", descrizione:"Un viaggio affascinante alla scoperta di uno dei più grandi artisti del Seicento italiano: Michelangelo Merisi da Caravaggio. Pittore rivoluzionario, capace di sconvolgere le regole artistiche del suo tempo con il suo uso magistrale della luce e dell'ombra, Caravaggio ha lasciato un'eredità indelebile nella storia dell'arte.", dataInizio: new Date().getTime() + (5 * 30 * 24 * 60 * 60 * 1000), dataFine: new Date().getTime() + (6 * 30 * 24 * 60 * 60 * 1000)},
    {nomeMostra:"Gustave Doré - Maestro dell'Illustrazione e del Fantastico", nomeArtista: "Gustave Doré", imgLogo:"../../assets/img/logoArte.png", descrizione:"Un'immersione affascinante nell'universo visionario di Gustave Doré, uno dei più grandi illustratori di tutti i tempi. Attraverso le sue opere, saremo trasportati in mondi fantastici, tra atmosfere fiabesche,", dataInizio: new Date().getTime() + (9 * 30 * 24 * 60 * 60 * 1000), dataFine: new Date().getTime() + (11 * 30 * 24 * 60 * 60 * 1000)},
    {nomeMostra:"Francisco Goya - I Capricci della Mente Umana", nomeArtista: "Francisco Goya", imgLogo:"../../assets/img/logoArte.png", descrizione:"Un viaggio affascinante e disturbante nell'universo oscuro e visionario di Francisco Goya, uno dei più grandi artisti del Romanticismo spagnolo. Attraverso le sue opere, spesso grottesche e satiriche, esploreremo i lati più reconditi dell'animo umano, tra follia, violenza, superstizione e critica sociale.", dataInizio: new Date().getTime() + (10 * 30 * 24 * 60 * 60 * 1000), dataFine: new Date().getTime() + (11 * 30 * 24 * 60 * 60 * 1000)},
    {nomeMostra:"Il rinascimento: I capolavori di Buonarroti", nomeArtista: "Michelangelo Buonarroti", imgLogo:"../../assets/img/logoArte.png", descrizione:"Michelangelo, artista poliedrico e indiscusso protagonista del Rinascimento italiano, viene celebrato in questa mostra che esplora la sua vasta produzione artistica. Scopriremo il suo genio creativo che si è espresso in maniera magistrale nella scultura, nella pittura e nell'architettura.", dataInizio: new Date().getTime() + (2 * 30 * 24 * 60 * 60 * 1000), dataFine: new Date().getTime() + (3 * 30 * 24 * 60 * 60 * 1000)},
    {nomeMostra:"Il rinascimento: I capolavori di Buonarroti", nomeArtista: "Michelangelo Buonarroti", imgLogo:"../../assets/img/logoArte.png", descrizione:"Michelangelo, artista poliedrico e indiscusso protagonista del Rinascimento italiano, viene celebrato in questa mostra che esplora la sua vasta produzione artistica. Scopriremo il suo genio creativo che si è espresso in maniera magistrale nella scultura, nella pittura e nell'architettura.", dataInizio: new Date().getTime() + (2 * 30 * 24 * 60 * 60 * 1000), dataFine: new Date().getTime() + (3 * 30 * 24 * 60 * 60 * 1000)},
    {nomeMostra:"Il rinascimento: I capolavori di Buonarroti", nomeArtista: "Michelangelo Buonarroti", imgLogo:"../../assets/img/logoArte.png", descrizione:"Michelangelo, artista poliedrico e indiscusso protagonista del Rinascimento italiano, viene celebrato in questa mostra che esplora la sua vasta produzione artistica. Scopriremo il suo genio creativo che si è espresso in maniera magistrale nella scultura, nella pittura e nell'architettura.", dataInizio: new Date().getTime() + (2 * 30 * 24 * 60 * 60 * 1000), dataFine: new Date().getTime() + (3 * 30 * 24 * 60 * 60 * 1000)}
  
  
  
  
  
  
  ]
}
