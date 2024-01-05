import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {SantianaComp1Component} from './santiana-comp1/santiana-comp1.component';
import {SantianaComp2Component} from './santiana-comp2/santiana-comp2.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SantianaComp1Component, SantianaComp2Component,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'santiana';
  span1 = "app";

}
