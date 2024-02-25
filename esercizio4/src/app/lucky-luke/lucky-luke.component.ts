import { Component } from '@angular/core';
import { DividerAngularmComponent } from '../divider-angularm/divider-angularm.component';
import { ElementLucky1Component } from '../element-lucky1/element-lucky1.component';
import { ElementLucky2Component } from '../element-lucky2/element-lucky2.component';

@Component({
  selector: 'app-lucky-luke',
  standalone: true,
  imports: [DividerAngularmComponent, ElementLucky1Component, ElementLucky2Component],
  templateUrl: './lucky-luke.component.html',
  styleUrl: './lucky-luke.component.css'
})
export class LuckyLukeComponent {

}
