import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singola-mostra',
  standalone: true,
  imports: [],
  templateUrl: './singola-mostra.component.html',
  styleUrl: './singola-mostra.component.css'
})
export class SingolaMostraComponent {

  identificatore: any;

 constructor(private route: ActivatedRoute){

 }

 ngOnInit(){

  this.identificatore = this.route.snapshot.paramMap.get('id');

 }

}
