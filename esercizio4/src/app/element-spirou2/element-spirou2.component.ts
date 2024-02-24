import { Component } from '@angular/core';
import { DividerAngularmComponent } from '../divider-angularm/divider-angularm.component';
import { on } from 'events';

@Component({
  selector: 'app-element-spirou2',
  standalone: true,
  imports: [DividerAngularmComponent],
  templateUrl: './element-spirou2.component.html',
  styleUrl: './element-spirou2.component.css'
})
export class ElementSpirou2Component {
  immagineUrl = "https://comicvine.gamespot.com/a/uploads/scale_large/0/9116/1976075-704.jpg";
  counter = 0;
  Titles = "Spirou #704 - 11/10/1951"
  btnAvanti() {
    console.log(this.counter)
    if (this.counter <= 3 ) {
      this.counter = this.counter + 1
      if (this.counter == 4) {
        this.counter = 3
      }
      if (this.counter == 0) {
        this.Titles = "Spirou #704 - 11/10/1951"
        this.immagineUrl = "https://comicvine.gamespot.com/a/uploads/scale_large/0/9116/1976075-704.jpg"
      } else if (this.counter == 1) {
        this.Titles = "Spirou #754 - 25/09/1952"
        this.immagineUrl = "https://comicvine.gamespot.com/a/uploads/scale_large/0/9116/1979410-754.jpg"
      } else if (this.counter == 2) {
        this.Titles = "Spirou #870 - 16/12/1954"
        this.immagineUrl = "https://comicvine.gamespot.com/a/uploads/scale_large/0/3125/6807759-spi870.jpg"
      } else if (this.counter == 3) {
        this.Titles = "Spirou #1022 - 14/11/1957"
        this.immagineUrl = "https://comicvine.gamespot.com/a/uploads/scale_large/3/32599/1226958-293422.jpg"
      } 
    }  else {
      this.counter = 3
    }
  }
  btnIndietro() {
    console.log(this.counter)
    if (this.counter > -1) {
      this.counter = this.counter - 1
      if (this.counter == -1) {
        this.counter = 0
      }
      if (this.counter == 0) {
        this.Titles = "Spirou #704 - 11/10/1951"
        this.immagineUrl = "https://comicvine.gamespot.com/a/uploads/scale_large/0/9116/1976075-704.jpg"
      } else if (this.counter == 1) {
        this.Titles = "Spirou #754 - 25/09/1952"
        this.immagineUrl = "https://comicvine.gamespot.com/a/uploads/scale_large/0/9116/1979410-754.jpg"
      } else if (this.counter == 2) {
        this.Titles = "Spirou #870 - 16/12/1954"
        this.immagineUrl = "https://comicvine.gamespot.com/a/uploads/scale_large/0/3125/6807759-spi870.jpg"
      } else if (this.counter == 3) {
        this.counter = 2
        this.Titles = "Spirou #1022 - 14/11/1957"
        this.immagineUrl = "https://comicvine.gamespot.com/a/uploads/scale_large/3/32599/1226958-293422.jpg"
      }
    } else {
      this.counter = 0
    }
  }
}
