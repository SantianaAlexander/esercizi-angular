import { Component } from '@angular/core';
import { DividerAngularmComponent } from '../divider-angularm/divider-angularm.component';
import { ElementTintin1Component } from '../element-tintin1/element-tintin1.component';
import { TabsAngularmComponent } from '../tabs-angularm/tabs-angularm.component';

@Component({
  selector: 'app-tintin',
  standalone: true,
  imports: [DividerAngularmComponent, ElementTintin1Component, TabsAngularmComponent],
  templateUrl: './tintin.component.html',
  styleUrl: './tintin.component.css'
})
export class TintinComponent {

}
