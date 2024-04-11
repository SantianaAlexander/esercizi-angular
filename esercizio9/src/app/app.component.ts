import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, IntroductionComponent, CommonModule, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'esercizio9';
  pagina: string = "welcome"

  onRiceviDati(value: any){
    console.log(value)
    this.pagina = value
  }
  onRiceviDati2(value: any) {
    console.log(value)
    this.pagina = value
  }
}
