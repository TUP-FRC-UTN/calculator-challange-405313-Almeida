import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalcActionComponent } from './component/calc-action/calc-action.component';
import { CalcViewComponent } from './component/calc-view/calc-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalcActionComponent, CalcViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculator';
}
