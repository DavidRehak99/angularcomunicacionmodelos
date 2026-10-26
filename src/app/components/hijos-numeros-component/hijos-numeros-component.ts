import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijos-numeros-component',
  standalone: false,
  styleUrl: './hijos-numeros-component.css',
  templateUrl: './hijos-numeros-component.html',
})
export class HijosNumerosComponent {

  @Input() numero!: number;
  @Output() sumarNumerosParent: EventEmitter<any>= new EventEmitter();


  SumarNumero(): void{
    
    this.sumarNumerosParent.emit(this.numero);

  }
}
