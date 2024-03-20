import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatListModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css'
})
export class LeaderboardComponent {
  giocatori: any[] = [
    {propic: "https://files.tips.gg/static/image/players/beastmode-rl.jpg", nickname: "BeastMode", ruolo: "Attaccente", eta: 18, nazione: "US"},
    {propic: "https://files.tips.gg/static/image/players/comm-rl.jpg", nickname: "comm", ruolo: "Difensore", eta: 20, nazione: "US" },
    {propic: "https://files.tips.gg/static/image/players/atow-rl.jpg", nickname: "Atow", ruolo: "Difensore", eta: 17, nazione: "BE" },
    {propic: "https://files.tips.gg/static/image/players/acronik-rl.jpg", nickname: "AcroniK", ruolo: "Attaccente", eta: 18, nazione: "PT" },
    {propic: "https://files.tips.gg/static/image/players/vatira-rl.jpg", nickname: "vatira", ruolo: "Portiere", eta: 17, nazione: "FR"},
    {propic: "https://files.tips.gg/static/image/players/itachi-rl.jpg", nickname: "itachi", ruolo: "Attaccente", eta: 20, nazione: "MA" },
    {propic: "https://files.tips.gg/static/image/players/jknaps-rl.jpg", nickname: "JKnaps", ruolo: "Difensore", eta: 24, nazione: "CN" },
    {propic: "https://files.tips.gg/static/image/players/reysbull-rl.jpg", nickname: "Reysbull", ruolo: "Portiere", eta: 20, nazione: "CI" },
    {propic: "https://files.tips.gg/static/image/players/archie-rl.jpg", nickname: "archie", ruolo: "Difensore", eta: 19, nazione: "UK" },
    {propic: "https://files.tips.gg/static/image/players/sad-rl.jpg", nickname: "Sad",ruolo: "Portiere", eta: 18, nazione: "BR" }
  ]
}
