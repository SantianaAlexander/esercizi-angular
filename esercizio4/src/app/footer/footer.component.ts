import { Component } from '@angular/core';
import { DividerAngularmComponent } from '../divider-angularm/divider-angularm.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [DividerAngularmComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
