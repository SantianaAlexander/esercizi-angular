import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css'
})
export class LeaderboardComponent {
  giocatori: any[] = [
    {propic: "https://files.tips.gg/static/image/players/beastmode-rl.jpg", nickname: "BeastMode", team: "Version1", eta: 18, nazione: "US"},
    {propic: "https://files.tips.gg/static/image/players/comm-rl.jpg", nickname: "comm", team: "Version1", eta: 20, nazione: "US" },
    {propic: "https://files.tips.gg/static/image/players/atow-rl.jpg", nickname: "Atow", team: "Team Liquid", eta: 17, nazione: "BE" },
    {propic: "https://files.tips.gg/static/image/players/acronik-rl.jpg", nickname: "AcroniK", team: "TeamLiquid", eta: 18, nazione: "PT" },
    {propic: "https://files.tips.gg/static/image/players/vatira-rl.jpg", nickname: "vatira", team: "Karmine Copr", eta: 17, nazione: "FR"},
    {propic: "https://files.tips.gg/static/image/players/itachi-rl.jpg", nickname: "itachi", team: "Karmine Corp", eta: 20, nazione: "MA" },
    {propic: "https://files.tips.gg/static/image/players/jknaps-rl.jpg", nickname: "JKnaps", team: "G2 Esports", eta: 24, nazione: "CN" },
    {propic: "https://files.tips.gg/static/image/players/reysbull-rl.jpg", nickname: "Reysbull", team: "Complexity Gaming", eta: 20, nazione: "CI" },
    {propic: "https://files.tips.gg/static/image/players/archie-rl.jpg", nickname: "archie", team: "Oxygen Esports", eta: 19, nazione: "UK" },
    {propic: "https://files.tips.gg/static/image/players/sad-rl.jpg", nickname: "Sad", team: "Team Secret", eta: 18, nazione: "BR" }
  ]
}
