import { Component } from '@angular/core';
import { DividerAngularmComponent } from '../divider-angularm/divider-angularm.component';
import { ElementSpirou1Component } from '../element-spirou1/element-spirou1.component';
import { ElementSpirou2Component } from '../element-spirou2/element-spirou2.component';

@Component({
  selector: 'app-spirou',
  standalone: true,
  imports: [DividerAngularmComponent, ElementSpirou1Component, ElementSpirou2Component],
  templateUrl: './spirou.component.html',
  styleUrl: './spirou.component.css'
})
export class SpirouComponent {

}
