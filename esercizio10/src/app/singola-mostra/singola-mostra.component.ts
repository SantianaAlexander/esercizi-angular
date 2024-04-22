import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MostraServiceService } from '../mostra-service.service';
import {MatDividerModule} from '@angular/material/divider'

@Component({
  selector: 'app-singola-mostra',
  standalone: true,
  imports: [CommonModule, MatDividerModule],
  templateUrl: './singola-mostra.component.html',
  styleUrl: './singola-mostra.component.css'
})
export class SingolaMostraComponent {

  identificatore: any;

 constructor(private route: ActivatedRoute, private provaService: MostraServiceService){

 }

 ngOnInit(){

  this.identificatore = this.route.snapshot.paramMap.get('id');
  console.log(this.identificatore)

 }

 mostra1 = this.provaService.mostra1
 mostra2 = this.provaService.mostra2
 mostra3 = this.provaService.mostra3
 mostra4 = this.provaService.mostra4
 mostra5 = this.provaService.mostra5
 mostra6 = this.provaService.mostra6
 mostra7 = this.provaService.mostra7
 

}
