import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  @Output() mandaDatiEvento = new EventEmitter<string>();
  @Output() mandaDatiEvento2 = new EventEmitter<string>();
  pagina = "welcome"
  apriHome() {
    this.pagina = "welcome"
    this.mandaDatiEvento.emit(this.pagina);
  }
  apriBiglietti() {
    this.pagina = "biglietti"
    this.mandaDatiEvento2.emit(this.pagina);
  }
}
