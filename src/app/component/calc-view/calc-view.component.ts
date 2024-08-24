import { Component } from '@angular/core';
import { CalcActionComponent } from '../calc-action/calc-action.component';

@Component({
  selector: 'app-calc-view',
  standalone: true,
  imports: [CalcActionComponent],
  templateUrl: './calc-view.component.html',
  styleUrl: './calc-view.component.css'
})
export class CalcViewComponent {
  numero1: number = 0;
  numero2: number = 0;


}
