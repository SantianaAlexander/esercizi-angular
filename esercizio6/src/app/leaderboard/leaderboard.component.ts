import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

interface Giocatore {
  propic: string;
  nickname: string;
  ruolo: string;
  eta: number;
  nazione: string;
  link: string;
}

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatListModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css'
})


export class LeaderboardComponent {
  constructor(public router: Router) {}

  giocatori: Giocatore[] = [
    {propic: "https://files.tips.gg/static/image/players/beastmode-rl.jpg", nickname: "BeastMode", ruolo: "Attaccante", eta: 18, nazione: "US", link: "https://tips.gg/player/BeastMode-rl/" },
    {propic: "https://files.tips.gg/static/image/players/comm-rl.jpg", nickname: "comm", ruolo: "Difensore", eta: 20, nazione: "US", link: "https://tips.gg/player/comm-rl/" },
    {propic: "https://files.tips.gg/static/image/players/atow-rl.jpg", nickname: "Atow", ruolo: "Difensore", eta: 17, nazione: "BE", link: "https://tips.gg/player/Atow-rl/" },
    {propic: "https://files.tips.gg/static/image/players/acronik-rl.jpg", nickname: "AcroniK", ruolo: "Attaccante", eta: 18, nazione: "PT", link: "https://tips.gg/player/AcroniK-rl/" },
    {propic: "https://files.tips.gg/static/image/players/vatira-rl.jpg", nickname: "vatira", ruolo: "Portiere", eta: 17, nazione: "FR", link: "https://tips.gg/player/vatira-rl/" },
    {propic: "https://files.tips.gg/static/image/players/itachi-rl.jpg", nickname: "itachi", ruolo: "Attaccante", eta: 20, nazione: "MA", link: "https://tips.gg/player/itachi-rl/" },
    {propic: "https://files.tips.gg/static/image/players/jknaps-rl.jpg", nickname: "JKnaps", ruolo: "Difensore", eta: 24, nazione: "CN", link: "https://tips.gg/player/JKnaps-rl/" },
    {propic: "https://files.tips.gg/static/image/players/reysbull-rl.jpg", nickname: "Reysbull", ruolo: "Portiere", eta: 20, nazione: "CI", link: "https://tips.gg/player/Reysbull-rl/" },
    {propic: "https://files.tips.gg/static/image/players/archie-rl.jpg", nickname: "archie", ruolo: "Difensore", eta: 19, nazione: "UK", link: "https://tips.gg/player/archie-rl/" },
    {propic: "https://files.tips.gg/static/image/players/sad-rl.jpg", nickname: "Sad",ruolo: "Portiere", eta: 18, nazione: "BR", link: "https://tips.gg/player/Sad-rl/" }
  ]

  onClick(giocatori: Giocatore) {
    window.open(giocatori.link, '_blank');
  }
}
