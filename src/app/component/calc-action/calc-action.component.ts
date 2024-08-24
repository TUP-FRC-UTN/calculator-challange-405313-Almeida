import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calc-action',
  standalone: true,
  imports: [],
  templateUrl: './calc-action.component.html',
  styleUrl: './calc-action.component.css'
})
export class CalcActionComponent {
  @Input() number1: number = 0;
  @Input() number2: number = 0;
  @Output() resultado = new EventEmitter<number>();
  sumar() {
    this.resultado.emit(this.number1 + this.number2)
  }
  restar() {
    this.resultado.emit(this.number1 - this.number2)
  }
  multiplicar() {
    this.resultado.emit(this.number1 * this.number2)
  }
  dividir() {
    this.resultado.emit(this.number1 / this.number2)
  }
  limpiar() {
    this.resultado.emit(this.number1 - this.number1 & this.number2 - this.number2)
  }

}
