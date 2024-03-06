import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-lista-contatti',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './lista-contatti.component.html',
  styleUrl: './lista-contatti.component.css'
})
export class ListaContattiComponent {
  persone: any[] = [
    {nome: "Jonathan", cognome: "Borgheresi", numero: 17759865200, eta: 34, colore: "Arancione" , isOnline: true ,propic: "https://t4.ftcdn.net/jpg/04/44/53/99/360_F_444539901_2GSnvmTX14LELJ6edPudUsarbcytOEgj.jpg"},
    {nome: "John", cognome: "Magic", numero: 32468799974, eta: 22 , colore: "Magenta" , isOnline : true , propic: "https://t3.ftcdn.net/jpg/03/02/09/52/360_F_302095207_iuCeDS2jIkIptfE29Wb0ldDs248FAzoi.jpg"},
    {nome: "Maria", cognome: "Perak", numero: 5511953259340, eta: 19 , colore: "Blu" , isOnline: false , propic: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    {nome: "Marco", cognome: "Mavco", numero: 528124129087, eta: 45 , colore: "Rosa" , isOnline: true , propic: "https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY="},
    {nome: "Boban", cognome: "Penzolov", numero: 37129159431, eta: 29 , colore: "Verde" , isOnline: false , propic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThe_GdeYkM6l3hHHFoXVlZKF2uqOC9LU049A&usqp=CAU"}
    
  ]
}
