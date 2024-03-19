import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DividerAngularmComponent } from './divider-angularm/divider-angularm.component';
import { Card1AngularmComponent } from './card1-angularm/card1-angularm.component';
import { Divider2AngularmComponent } from './divider2-angularm/divider2-angularm.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DividerAngularmComponent, Card1AngularmComponent, Divider2AngularmComponent, LeaderboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'esercizio6';
}
