import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-numeros-component',
  standalone: false,
  styleUrl: './padre-numeros-component.css',
  templateUrl: './padre-numeros-component.html',
})
export class PadreNumerosComponent {


  public sumatorio: number;
  public arrayNumero: Array<number>

  constructor() {
    this.sumatorio =0;
    this.arrayNumero= [8,5,6]
}


  sumarNumerosParent(numeroRecibido: number): void{
   
    this.sumatorio +=numeroRecibido
   
  }

  generarNUmero(): void{
    let random = Math.floor((Math.random() * 100) + 1); 

    this.arrayNumero.push(random); 
  }

  
}
