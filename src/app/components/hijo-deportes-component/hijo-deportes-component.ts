import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-deportes-component',
  standalone: false,
  styleUrl: './hijo-deportes-component.css',
  templateUrl: './hijo-deportes-component.html',
})
export class HijoDeportesComponent {
  @Input() sport!: string;
  @Output() seleccionarFavoritoPadre: EventEmitter<any>= new EventEmitter();


  mostrarFavorito(): void{
    this.seleccionarFavoritoPadre.emit(this.sport);

  }
}
